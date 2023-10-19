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
  selector: 'app-scrolltext',
  templateUrl: './scrolltext.component.html',
  styleUrls: ['./scrolltext.component.css']
})
export class ScrolltextComponent implements OnInit {
  result = [];
  loading = false;
  scroll_id ;
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
      this.scroll_id=id;
      this.scrollDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  scrollDelete() : void{
    if (this.scroll_id == null || this.scroll_id == 0) {
      return;
    }
    this.loading = true;
var table = 'scroll_text'
var where = 'scroll_id='+this.scroll_id;

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

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allscrolltext')
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
        if (parseInt(val.scroll_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(ScrollForm, {
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

}




@Component({
  selector: 'scroll-form',
  templateUrl: 'scroll-form.html',
})
export class ScrollForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  ScrollForm: FormGroup;
  loading = false;
  scroll_id = 0;
  subresult = [];
  Scroll_image: string = 'Select Scroll Image';
  image_path: string = '';
  constructor(
    public dialogRef: MatDialogRef<ScrollForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.ScrollForm = new FormGroup({      
      //'scroll_id': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.ScrollForm.patchValue({       
        description: this.data.scroll_text,
        status: this.data.status,
        scroll_id: this.data.scroll_id,
      });
      this.scroll_id = this.data.scroll_id;
      //this.image_path = this.data.scroll_image;
    }
    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allscrolltext')
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
    if (this.ScrollForm.invalid) {
      return;
    }
    console.log("text22"+this.scroll_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.scroll_id != 0) {
        //formData.append('scroll_id', this.ScrollForm.value.scroll_id);       
        formData.append('scroll_text', this.ScrollForm.value.description);
        formData.append('status', this.ScrollForm.value.status);
       // formData.append('scroll_image', this.image_path);
        console.log("text33"+this.scroll_id );
      url = 'update_record/scroll_text/scroll_id = ' + this.scroll_id;
    } else {
        //formData.append('scroll_id', this.ScrollForm.value.scroll_id);
        formData.append('scroll_text', this.ScrollForm.value.description);
        formData.append('status', this.ScrollForm.value.status);
        //formData.append('Scroll_image', this.image_path);
      url = 'insert_scrolltext';
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
      this.Scroll_image = 'Select Scroll Image';
    }
  }

}
