import { Component, OnInit,Inject, ViewChild, ElementRef} from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor/public-api';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})
export class EventpageComponent implements OnInit {
  
  result = [];
  loading = false;
  event_id ;
  
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getEvent();
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
      this.event_id=id;
      this.getEventDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getEventDelete() : void{
    if (this.event_id == null || this.event_id == 0) {
      return;
    }
    this.loading = true;
     var table = 'Events'
     var where = 'event_id='+this.event_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getEvent();
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


  getEvent(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Event')
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
        if (parseInt(val.event_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(EventForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data,
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getEvent();
      }
    });
  }
 
  openimage(id, res): void {
    var data = null;
    if (id != 0) {
      this[res].forEach(val => {
        if (parseInt(val.event_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(EventImageForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data,
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getEvent();
      }
    });
  }

  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewEvent, {
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
  selector: 'event-form',
  templateUrl: 'event-form.html',
})
export class EventForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  eventFormData: FormGroup;
  loading = false;
  event_id = 0;
  subresult = [];
  event_image: string = 'Select Event Image';
  image_path: string = '';
  // about_language=0;
  constructor(
    public dialogRef: MatDialogRef<EventForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.eventFormData = new FormGroup({      
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'fromdate': new FormControl('', Validators.required),
      'todate': new FormControl('', Validators.required),
      'fromtime': new FormControl('', Validators.required),
      'totime': new FormControl('', Validators.required),
        'data': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      //'image': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.eventFormData.patchValue({       
        name: this.data.event_name,
        location: this.data.event_location,
        fromdate:this.data.event_fromdate,
        todate:this.data.event_Todate,
        fromtime:this.data.event_Fromtime,
        totime:this.data.event_Totime,
        description: this.data.event_description,
        status: this.data.status,
        event_id: this.data.event_id,
        
      });
      this.event_id = this.data.event_id;
      this.image_path = this.data.event_image;
      
    }
   
  }

  
  onSubmit() {
    console.log("text11");
    // if (this.image_path==null ||  this.image_path=='') {
    //   this._snackBar.open("Choose image", '', {
    //     duration: 2000,
    //   });
    //   return;
    // }
    // if (this.eventFormData.invalid) {
    //   return;
    // }
    console.log("text22"+this.event_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.event_id != 0) {
        formData.append('event_name', this.eventFormData.value.name); 
        formData.append('event_location', this.eventFormData.value.location); 
        formData.append('event_fromdate', this.eventFormData.value.fromdate); 
        formData.append('event_Todate', this.eventFormData.value.todate); 
        formData.append('event_Fromtime', this.eventFormData.value.fromtime); 
        formData.append('event_Totime', this.eventFormData.value.totime);     
        formData.append('event_description', this.eventFormData.value.description);
        formData.append('status', this.eventFormData.value.status);
        formData.append('event_image', this.image_path);
        console.log("text--->"+this.event_id );
        url = 'update_record/event/event_id = ' + this.event_id;
    } else {
        formData.append('event_name', this.eventFormData.value.name);
        formData.append('event_location', this.eventFormData.value.location);
        formData.append('event_fromdate', this.eventFormData.value.fromdate); 
        formData.append('event_Todate', this.eventFormData.value.todate); 
        formData.append('event_Fromtime', this.eventFormData.value.fromtime); 
        formData.append('event_Totime', this.eventFormData.value.totime); 
        formData.append('event_description', this.eventFormData.value.description);
        formData.append('status', this.eventFormData.value.status);
        formData.append('event_image', this.image_path);
       // formData.append('about_language', this.about_language.toString());
        url = 'insert_event';
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
      this.event_image = 'Select Event Image';
    }
  }

}

@Component({
  selector: 'event-image-view',
  templateUrl: 'eventimage-view.html',
})

export class PictureViewEvent {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewEvent>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}



@Component({
  selector: 'event-imageform',
  templateUrl: 'event-imageform.html',
})
export class EventImageForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  EventImageFormData: FormGroup;
  loading = false;
  event_id = 0;
  subresult = [];
  @ViewChild('fileInput1') fileInput1: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  @ViewChild('fileInput3') fileInput3: ElementRef;
  @ViewChild('fileInput4') fileInput4: ElementRef;
  @ViewChild('fileInput5') fileInput5: ElementRef;
  @ViewChild('fileInput6') fileInput6: ElementRef;
  @ViewChild('fileInput7') fileInput7: ElementRef;
  @ViewChild('fileInput8') fileInput8: ElementRef;

  pic_1: string = 'Add Event Image';
  pic_2: string = 'Add Event Image';
  pic_3: string = 'Add Event Image';
  pic_4: string = 'Add Event Image';
  pic_5: string = 'Add Event Image';
  pic_6: string = 'Add Event Image';
  pic_7: string = 'Add Event Image';
  pic_8: string = 'Add Event Image';
  image_path: string = '';
  image_path2: string = '';
  image_path3: string = '';
  image_path4: string = '';
  image_path5: string = '';
  image_path6: string = '';
  image_path7: string = '';
  image_path8: string = '';
  // about_language=0;
  constructor(
    public dialogRef: MatDialogRef<EventImageForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.EventImageFormData = new FormGroup({      
      'name': new FormControl('', Validators.required),
      'location': new FormControl('', Validators.required),
      'fromdate': new FormControl('', Validators.required),
      'todate': new FormControl('', Validators.required),
      'fromtime': new FormControl('', Validators.required),
      'totime': new FormControl('', Validators.required),
      'data': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      //'image': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data != null) {
      this.EventImageFormData.patchValue({       
        name: this.data.event_name,
        location: this.data.event_location,
        fromdate:this.data.event_fromdate,
        todate:this.data.event_Todate,
        fromtime:this.data.event_Fromtime,
        totime:this.data.event_Totime,
        description: this.data.event_description,
        status: this.data.status,
        event_id: this.data.event_id,
        
      });
      this.event_id = this.data.event_id;
      this.image_path = this.data.pic_1;
      this.image_path2=this.data.pic_2;
      this.image_path3=this.data.pic_3;
      this.image_path4=this.data.pic_4;
      this.image_path5=this.data.pic_5;
      this.image_path6=this.data.pic_6;
      this.image_path7=this.data.pic_7;
      this.image_path8=this.data.pic_8;
    }
   
  }

  
  onSubmit() {
    console.log("text11");
    // if (this.image_path==null ||  this.image_path=='') {
    //   this._snackBar.open("Choose image", '', {
    //     duration: 2000,
    //   });
    //   return;
    // }
    
    // console.log("text22"+this.event_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.event_id != 0) {
        formData.append('pic_1', this.image_path);
        formData.append('pic_2', this.image_path2);
        formData.append('pic_3', this.image_path3);
        formData.append('pic_4', this.image_path4);
        formData.append('pic_5', this.image_path5);
        formData.append('pic_6', this.image_path6);
        formData.append('pic_7', this.image_path7);
        formData.append('pic_8', this.image_path8);
        console.log("text--->"+this.event_id );
        url = 'update_record/Events/event_id = ' + this.event_id;
    } else {
        formData.append('pic_1', this.image_path);
        formData.append('pic_2', this.image_path2);
        formData.append('pic_3', this.image_path3);
        formData.append('pic_4', this.image_path4);
        formData.append('pic_5', this.image_path5);
        formData.append('pic_6', this.image_path6);
        formData.append('pic_7', this.image_path7);
        formData.append('pic_8', this.image_path8);
        url = 'insert_event';
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


  fileProgress(fileInput: any, name: string, path: string, inputElement: ElementRef) {
    const fileData = <File>fileInput.target.files[0];
    this[name] = fileData.name;
    this.loading = true;
    const formData = new FormData();
    formData.append('file', fileData);

    // Replace 'your-upload-api-url' with your actual API endpoint for file upload
    this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_imgfile', formData).subscribe(
      (res: any) => {
        this.loading = false;
        if (res.result.error === false) {
          this[path] = res.result.data;
        } else {
          // Handle error messages as needed
        }
      },
      (error: any) => {
        this.loading = false;
        // Handle HTTP error, e.g., display an error message
      }
    );

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
      this.pic_1 = 'Select Event Image';
    }
    if (url === 'image_path2') {
      this.pic_2 = 'Select Event Image';
    }
    if (url === 'image_path3') {
      this.pic_3 = 'Select Event Image';
    }
    if (url === 'image_path4') {
      this.pic_4 = 'Select Event Image';
    }
    if (url === 'image_path5') {
      this.pic_5 = 'Select Event Image';
    }
    if (url === 'image_path6') {
      this.pic_6 = 'Select Event Image';
    }
    if (url === 'image_path7') {
      this.pic_7 = 'Select Event Image';
    }
    if (url === 'image_path8') {
      this.pic_8 = 'Select Event Image';
    }
  }

}