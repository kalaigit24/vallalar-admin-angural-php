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
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.css']
})
export class HomebannerComponent implements OnInit {
  result = [];
  loading = false;
  home_id ;
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getHomebanner();
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
      this.home_id=id;
      this.getHomebannerDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getHomebannerDelete() : void{
    if (this.home_id == null || this.home_id == 0) {
      return;
    }
    this.loading = true;
var table = 'home_banner'
var where = 'home_id='+this.home_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getHomebanner();
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
  getHomebanner(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allbanners')
      .subscribe(
        (res) => {
          console.log("jhxgjhlfg-->"+res );
          this.result = res["result"]["data"];
          console.log(this.result );
          this.loading = false;
          this.hideSpinner('sp3')
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
        if (parseInt(val.home_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(HomeBannerForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getHomebanner();
      }
    });
    console.log("haiiiiiiiiiiiiiiii");
   console.log(id);
   console.log(data);

  }


  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewHomeBanner, {
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
  selector: 'homebanner-form',
  templateUrl: 'homebanner-form.html',
})
export class HomeBannerForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  HomeBannerForm: FormGroup;
  loading = false;
  home_id = 0;
  subresult = [];
  home_image: string = 'Select Banner Image';
  image_path: string = '';
  constructor(
    public dialogRef: MatDialogRef<HomeBannerForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.HomeBannerForm = new FormGroup({      
      //'home_id': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    console.log("haiii")
    console.log(this.data)

    if (this.data != null) {
      console.log("welcome")
      this.HomeBannerForm.patchValue({       
        description: this.data.home_description,
        status: this.data.status,
        home_id: this.data.home_id,
      });
      this.home_id = this.data.home_id;
      this.image_path = this.data.home_image;
    }
    // this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allbanners')
    //   .subscribe(
    //     (res) => {
    //       this.subresult = res["result"]["data"];              
    //     },
    //     (error) => {
    //       this._snackBar.open(error["statusText"], '', {
    //         duration: 2000,
    //       });
    //     }
    //   );
  }

  getInnerHTML(val){
    return val.replace(/(<([^>]+)>)/ig,'');
  }

  onSubmit() {
    console.log("text11");
    if (this.HomeBannerForm.invalid) {
      return;
    }
    console.log("text22"+this.home_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.home_id != 0) {
        //formData.append('home_id', this.HomeBannerForm.value.home_id);       
        formData.append('home_description', this.HomeBannerForm.value.description);
        formData.append('status', this.HomeBannerForm.value.status);
        formData.append('home_image', this.image_path);
        console.log("text33"+this.home_id );
      url = 'update_record/home_banner/home_id = ' + this.home_id;
    } else {
        //formData.append('home_id', this.HomeBannerForm.value.home_id);
        formData.append('home_description', this.HomeBannerForm.value.description);
        formData.append('status', this.HomeBannerForm.value.status);
        formData.append('home_image', this.image_path);
      url = 'insert_homebanner';
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
      this.home_image = 'Select Banner Image';
    }
  }

}


@Component({
  selector: 'homeimage-view',
  templateUrl: 'homeimage-view.html',
})

export class PictureViewHomeBanner {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewHomeBanner>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}