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
  selector: 'app-aboutchruch',
  templateUrl: './aboutchruch.component.html',
  styleUrls: ['./aboutchruch.component.css']
})
export class AboutchruchComponent implements OnInit {
  result = [];
  loading = false;
  about_id ;
  about_language=0;
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getAboutChurch();
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
      this.about_id=id;
      this.getAboutChurchDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getAboutChurchDelete() : void{
    if (this.about_id == null || this.about_id == 0) {
      return;
    }
    this.loading = true;
var table = 'about_church'
var where = 'about_id='+this.about_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getAboutChurch();
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


  onTabChanged($event) {
    let clickedIndex = $event.index;
    console.log(clickedIndex );
    if(this.result!=null)
    {
    while(this.result.length > 0) {
      this.result.pop();
     }
    }
    this.about_language=clickedIndex;
    this.getAboutChurch()
  }








  getAboutChurch(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allchurchdetails/'+this.about_language)
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
        if (parseInt(val.about_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(AboutChurchForm, {
      minWidth: "40%",
      maxWidth: "40%",
      //data: data,
      data: {
        data: data,        
        about_language:this.about_language
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getAboutChurch();
      }
    });
  }


  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewAboutChurch, {
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
  selector: 'aboutchurch-form',
  templateUrl: 'aboutchurch-form.html',
})
export class AboutChurchForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  AboutChurchFormData: FormGroup;
  loading = false;
  about_id = 0;
  subresult = [];
  about_image: string = 'Select Banner Image';
  image_path: string = '';
  about_language=0;
  constructor(
    public dialogRef: MatDialogRef<AboutChurchForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.AboutChurchFormData = new FormGroup({      
      'tittle': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data.data != null) {
      this.AboutChurchFormData.patchValue({       
        tittle: this.data.data.about_tittle,
        description: this.data.data.about_text,
        status: this.data.data.status,
        about_id: this.data.data.about_id,
        
      });
      this.about_id = this.data.data.about_id;
      this.image_path = this.data.data.about_image;
      
    }
    this.about_language=this.data.about_language
    console.log("texttttttttt--->"+this.data.about_language );
    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allchurchdetails/'+this.about_language)
      .subscribe(
        (res) => {
          this.subresult = res["result"]["data"];              
        },
        (error) => {
          this._snackBar.open(error["statusText"], '', {
            duration: 2000,
          });
        }
      );
  }

  onSubmit() {
    console.log("text11");
    if (this.AboutChurchFormData.invalid) {
      return;
    }
    console.log("text22"+this.about_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.about_id != 0) {
        formData.append('about_tittle', this.AboutChurchFormData.value.tittle);       
        formData.append('about_text', this.AboutChurchFormData.value.description);
        formData.append('status', this.AboutChurchFormData.value.status);
        formData.append('about_image', this.image_path);
        console.log("text--->"+this.about_id );
        url = 'update_record/about_church/about_id = ' + this.about_id;
    } else {
        formData.append('about_tittle', this.AboutChurchFormData.value.tittle);
        formData.append('about_text', this.AboutChurchFormData.value.description);
        formData.append('status', this.AboutChurchFormData.value.status);
        formData.append('about_image', this.image_path);
        formData.append('about_language', this.about_language.toString());
        url = 'insert_aboutchurch';
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
      this.about_image = 'Select Banner Image';
    }
  }

}


@Component({
  selector: 'aboutchurchimage-view',
  templateUrl: 'aboutchurchimage-view.html',
})

export class PictureViewAboutChurch {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewAboutChurch>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}