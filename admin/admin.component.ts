
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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  result = [];
  loading = false;
  admin_id ;
  image_url='http://vallalarforall.com/vallalar_app_api/v1/';
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getAdmin();
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
      this.admin_id=id;
      this.wordDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  wordDelete() : void{
    if (this.admin_id == null || this.admin_id == 0) {
      return;
    }
    this.loading = true;
var table = 'admin'
var where = 'admin_id='+this.admin_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getAdmin();
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

  getAdmin(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_admindetails')
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
        if (parseInt(val.admin_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(AdminForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getAdmin();
      }
    });
  }

  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewUser, {
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
  selector: 'admin-form',
  templateUrl: 'admin-form.html',
})
export class AdminForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  AdminForm: FormGroup;
  loading = false;
  admin_id = 0;
  subresult = [];
  admin_image: string = 'Select admin Image';
  image_path: string = '';
  constructor(
    public dialogRef: MatDialogRef<AdminForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.AdminForm = new FormGroup({      
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.AdminForm.patchValue({       
        description: this.data.admin_text,
        name: this.data.admin_name,
        status: this.data.status,
        admin_id: this.data.admin_id,
      });
      this.admin_id = this.data.admin_id;
      this.image_path = this.data.admin_image;
    }
    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_admindetails')
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
    if (this.AdminForm.invalid) {
      return;
    }
    console.log("text22"+this.admin_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.admin_id != 0) {
        formData.append('admin_name', this.AdminForm.value.name);       
        formData.append('admin_text', this.AdminForm.value.description);
        formData.append('status', this.AdminForm.value.status);
        formData.append('admin_image', this.image_path);
        console.log("text33"+this.admin_id );
      url = 'update_record/admin/admin_id = ' + this.admin_id;
    } else {
        formData.append('admin_name', this.AdminForm.value.name);
        formData.append('admin_text', this.AdminForm.value.description);
        formData.append('status', this.AdminForm.value.status);
        formData.append('admin_image', this.image_path);
      url = 'insert_admintext';
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
      this.admin_image = 'Select admin Image';
    }
  }

}


@Component({
  selector: 'adminimage-view',
  templateUrl: 'adminimage-view.html',
})

export class PictureViewUser {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewUser>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}