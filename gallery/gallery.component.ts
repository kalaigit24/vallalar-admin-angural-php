import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  result = [];
  loading = false;
  gallery_id ;
  
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getGallery();
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

  public openConfirmationDialog(id: void) {
    this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
    .then((confirmed) => {
      console.log('User confirmed:', confirmed)
      if(confirmed==true)
      {
      this.gallery_id=id;
      this.getGalleryDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getGalleryDelete() : void{
    if (this.gallery_id == null || this.gallery_id == 0) {
      return;
    }
    this.loading = true;
var table = 'gallery'
var where = 'gallery_id='+this.gallery_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getGallery();
        if (res["result"]["error"] === false) {
          
        } else {
          this._snackBar.open(res["result"]["message"], '', {
            duration: 2000,
          });
        }
      },
      (error) => {
        this.loading = false;
        this._snackBar.open(error["statusText"], '', {
          duration: 2000,
        });
        this.loading = false;
        this.hideSpinner('sp3')


      }
    );
  }


  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';


  getGallery(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_gallery')
      .subscribe(
        (res) => {
          console.log("jhxgjhlfg-->"+res );
          this.result = res["result"]["data"];
          console.log(this.result );
          this.loading = false;
          this.hideSpinner('sp3')
          if(!this.result)
            {
              this._snackBar.open("Records Empty", '', {
                duration: 2000,
              });
            }
        },
        (error) => {
          this._snackBar.open(error["statusText"], '', {
            duration: 2000,
          });
          this.loading = false;
          this.hideSpinner('sp3')
        }
      );
  }

  openDialog(id, res): void {
    var data = null;
    if (id != 0) {
      this[res].forEach(val => {
        if (parseInt(val.gallery_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(GalleryForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data,
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getGallery();
      }
    });
  }


  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewGallery, {
      minWidth: "40%",
      maxWidth: "40%",
      data: {
        data: data,
        action: action
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}



@Component({
  selector: 'gallery-form',
  templateUrl: 'gallery-form.html',
})
export class GalleryForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  GalleryFormData: FormGroup;
  loading = false;
  gallery_id = 0;
  subresult = [];
  gallery_image: string = 'Select Banner Image';
  image_path: string = '';
  about_language=0;
  constructor(
    public dialogRef: MatDialogRef<GalleryForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.GalleryFormData = new FormGroup({      
      //'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      //'image': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.GalleryFormData.patchValue({       
        //name: this.data.gallery_name,
        description: this.data.gallery_descrption,
        status: this.data.status,
        gallery_id: this.data.gallery_id,
        
      });
      this.gallery_id = this.data.gallery_id;
      this.image_path = this.data.gallery_image;
      
    }
   
  }

  onSubmit() {
    console.log("text11");
    if (this.image_path==null ||  this.image_path=='') {
      this._snackBar.open("Choose image", '', {
        duration: 2000,
      });
      return;
    }
    if (this.GalleryFormData.invalid) {
      return;
    }
    console.log("text22"+this.gallery_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.gallery_id != 0) {
        //formData.append('gallery_name', this.GalleryFormData.value.name);       
        formData.append('gallery_descrption', this.GalleryFormData.value.description);
        formData.append('status', this.GalleryFormData.value.status);
        formData.append('gallery_image', this.image_path);
        console.log("text--->"+this.gallery_id );
        url = 'update_record/gallery/gallery_id = ' + this.gallery_id;
    } else {
        //formData.append('gallery_name', this.GalleryFormData.value.name);
        formData.append('gallery_descrption', this.GalleryFormData.value.description);
        formData.append('status', this.GalleryFormData.value.status);
        formData.append('gallery_image', this.image_path);
       // formData.append('about_language', this.about_language.toString());
        url = 'insert_gallery';
        console.log("Insert--->"+formData );
    }
    this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/' + url, formData).subscribe(
      (res) => {
        this.loading = false;
        if (res["result"]["error"] === false) {
          this.dialogRef.close(true);
        } else {
          this._snackBar.open(res["result"]["message"], '', {
            duration: 2000,
          });
        }
      },
      (error) => {
        this.loading = false;
        this._snackBar.open(error["statusText"], '', {
          duration: 2000,
        });
      }
    );
  }


  fileProgress(fileInput: any, name: string, path: string) {
    var fileData = <File>fileInput.target.files[0];
    this[name] = fileData.name;
    this.loading = true;
    var formData = new FormData();
    formData.append('file', fileData);
    this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_file', formData).subscribe(
      (res) => {
        this.loading = false;
        if (res["result"]["error"] === false) {
          this[path] = res["result"]["data"];
        } else {
          this._snackBar.open(res["result"]["message"], '', {
            duration: 2000,
          });
        }
      },
      (error) => {
        this.loading = false;
        this._snackBar.open(error["statusText"], '', {
          duration: 2000,
        });
      });
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '100px',
    maxHeight: '100px',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      { class: 'akarathi-0', name: 'Akarathi_0' },
      { class: 'tamil-bible', name: 'Tamil Bible' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
  };

  removeMedia(url) {
    this[url] = '';
    if (url === 'image_path') {
      this.gallery_image = 'Select Banner Image';
    }
  }

}


@Component({
  selector: 'galleryimage-view',
  templateUrl: 'galleryimage-view.html',
})

export class PictureViewGallery {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewGallery>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}