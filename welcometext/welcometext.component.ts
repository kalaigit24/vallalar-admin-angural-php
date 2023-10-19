
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
  selector: 'app-welcometext',
  templateUrl: './welcometext.component.html',
  styleUrls: ['./welcometext.component.css']
})
export class WelcometextComponent implements OnInit {
  result = [];
  loading = false;
  welcome_id ;
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getWords();
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
      this.welcome_id=id;
      this.wordDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  wordDelete() : void{
    if (this.welcome_id == null || this.welcome_id == 0) {
      return;
    }
    this.loading = true;
var table = 'welcometext'
var where = 'welcome_id='+this.welcome_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getWords();
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
  getWords(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_welcometext')
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
        if (parseInt(val.welcome_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(WelcomeForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getWords();
      }
    });
  }

  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewwelcome, {
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
  selector: 'welcome-form',
  templateUrl: 'welcome-form.html',
})
export class WelcomeForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  welcomeForm: FormGroup;
  loading = false;
  welcome_id = 0;
  subresult = [];
  welcome_image: string = 'Select Welcome Image';
  image_path: string = '';
  constructor(
    public dialogRef: MatDialogRef<WelcomeForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.welcomeForm = new FormGroup({      
      //'welcome_id': new FormControl('', Validators.required),
      // 'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.welcomeForm.patchValue({       
        description: this.data.welcome_text,
        status: this.data.status,
        welcome_id: this.data.welcome_id,
      });
      this.welcome_id = this.data.welcome_id;
      this.image_path = this.data.welcome_image;
    }
    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_welcometext')
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
    if (this.welcomeForm.invalid) {
      return;
    }
    console.log("text22"+this.welcome_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.welcome_id != 0) {
        //formData.append('welcome_id', this.welcomeForm.value.welcome_id);       
        formData.append('welcome_text', this.welcomeForm.value.description);
        formData.append('status', this.welcomeForm.value.status);
        formData.append('welcome_image', this.image_path);
        console.log("text33"+this.welcome_id );
      url = 'update_record/welcometext/welcome_id = ' + this.welcome_id;
    } else {
        //formData.append('welcome_id', this.welcomeForm.value.welcome_id);
        formData.append('welcome_text', this.welcomeForm.value.description);
        formData.append('status', this.welcomeForm.value.status);
        formData.append('welcome_image', this.image_path);
      url = 'insert_welcometext';
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
      this.welcome_image = 'Select Welcome Image';
    }
  }

}


@Component({
  selector: 'welcomeimage-view',
  templateUrl: 'welcomeimage-view.html',
})

export class PictureViewwelcome {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewwelcome>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}