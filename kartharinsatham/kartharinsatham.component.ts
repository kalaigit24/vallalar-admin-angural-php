import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-kartharinsatham',
  templateUrl: './kartharinsatham.component.html',
  styleUrls: ['./kartharinsatham.component.css']
})
export class KartharinsathamComponent implements OnInit {

  result = [];
  loading = false;
  karthar_id ;
  about_language=0;
 
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getArticles();
   
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
      this.karthar_id=id;
      this.getArticlesDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getArticlesDelete() : void{
    if (this.karthar_id == null || this.karthar_id == 0) {
      return;
    }
    this.loading = true;
var table = 'kartharin_satham'
var where = 'karthar_id='+this.karthar_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getArticles();
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








  getArticles(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_kartharin_satham')
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
        if (parseInt(val.karthar_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(KartharChurchForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data,
      /*data: {
        data: data,        
        about_language:this.about_language
      }*/
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getArticles();
      }
    });
  }


  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewKarthar, {
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

  changeFunc(event: any) {
    const data = event;
    const formattedDate =data.getFullYear()+ '-' + (data.getMonth() + 1) + '-' +data.getDate() ;
    console.log("hai-->"+formattedDate);
    //this.date_check= this.datePipe.transform(data, 'yyyy-MM-dd');
    
}






}



@Component({
  selector: 'kartharchurch-form',
  templateUrl: 'kartharchurch-form.html',
})
export class KartharChurchForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  KartharChurchFormData: FormGroup;
  loading = false;
  karthar_id = 0;
  subresult = [];
  karthar_image: string = 'Select Banner Image';
  image_path: string = '';
  about_language=0;
 
  constructor(
   
    public dialogRef: MatDialogRef<KartharChurchForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.KartharChurchFormData = new FormGroup({      
      'date': new FormControl(new Date()),
      'tittle': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'articleno': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.KartharChurchFormData.patchValue({       
        date: this.data.karthar_date,
        tittle: this.data.karthar_name,
        description: this.data.karthar_description,
        articleno: this.data.karthar_no,
        status: this.data.status,
        karthar_id: this.data.karthar_id,
        
      });
      this.karthar_id = this.data.karthar_id;
      this.image_path = this.data.karthar_image;
      
    }
  
    
  }

  onSubmit() {
    console.log("text11");
    if (this.KartharChurchFormData.invalid) {
      return;
    }
    console.log("text22"+this.karthar_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.karthar_id != 0) {
        formData.append('karthar_date', this.KartharChurchFormData.value.date);
        formData.append('karthar_name', this.KartharChurchFormData.value.tittle);       
        formData.append('karthar_description', this.KartharChurchFormData.value.description);
        formData.append('karthar_no', this.KartharChurchFormData.value.articleno);
        formData.append('status', this.KartharChurchFormData.value.status);
        formData.append('karthar_image', this.image_path);
        console.log("text--->"+this.karthar_id );
        url = 'update_record/kartharin_satham/karthar_id = ' + this.karthar_id;
    } else {
        formData.append('karthar_date', this.KartharChurchFormData.value.date);
        formData.append('karthar_name', this.KartharChurchFormData.value.tittle);
        formData.append('karthar_description', this.KartharChurchFormData.value.description);
        formData.append('karthar_no', this.KartharChurchFormData.value.articleno);
        formData.append('status', this.KartharChurchFormData.value.status);
        formData.append('karthar_image', this.image_path);        
        url = 'insert_kartharin_satham';
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
      this.karthar_image = 'Select Banner Image';
    }
  }

}


@Component({
  selector: 'kartharimage-view',
  templateUrl: 'kartharimage-view.html',
})

export class PictureViewKarthar {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewKarthar>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}