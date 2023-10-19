import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';



@Component({
  selector: 'app-johnydavismessage',
  templateUrl: './johnydavismessage.component.html',
  styleUrls: ['./johnydavismessage.component.css']
})
export class JohnydavismessageComponent implements OnInit {

  result = [];

  resultaudio = [];

  resultvideo = [];

  loading = false;

  articles_id ;
  audio_id;
  video_id;

  about_language=0;
  hollmattab=0;

  admin_id=1;

  table = 'articles';
  where = 'articles_id='+this.articles_id;

  selectedIndex=0;

  //http://vallalarforall.com/vallalar_app_api/v1/uploads/user1.jpg

  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getArticels();
    
  }

  id = '';
 
  player:any;
  ytEvent:any;

  playerVars = {
    cc_lang_pref: 'en'
  };

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
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
         
        console.log('Home:', this.hollmattab)
         if(this.hollmattab==0)
        {
          
          this.articles_id=id;
          this.table = 'articles';
          this.where = 'articles_id='+this.articles_id;
          this.getArticelsDelete();
        }
        if(this.hollmattab==1)
        {
          
          this.audio_id=id;
          this.table = 'Audios';
          this.where = 'audio_id='+this.audio_id;
          this.getArticelsDelete();
        }
        if(this.hollmattab==2)
        {
         
          this.video_id=id;
          this.table = 'videos';
          this.where = 'video_id='+this.video_id;
          this.getArticelsDelete();
        }



      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  getArticelsDelete() : void{
    if ((this.articles_id == null || this.articles_id == 0) && this.hollmattab==0) {
      return;
    }
    if ((this.audio_id == null || this.audio_id == 0) && this.hollmattab==1) {
      return;
    }
    if ((this.video_id == null || this.video_id == 0) && this.hollmattab==2) {
      return;
    }



    this.loading = true;


    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ this.table +'/' + this.where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        if(this.hollmattab==0)
        {
        this.getArticels()
        }
        if(this.hollmattab==1)
        {
        this.getAudios();
        }
        if(this.hollmattab==2)
        {
        this.getVideos();
        }
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
    console.log("tab-->"+clickedIndex );
    if(this.result!=null)
    {
    while(this.result.length > 0) {
      this.result.pop();
     }
    }
    if(this.resultaudio!=null)
    {
    while(this.resultaudio.length > 0) {
      this.resultaudio.pop();
     }
    }
    if(this.resultvideo!=null)
    {
    while(this.resultvideo.length > 0) {
      this.resultvideo.pop();
     }
    }
    this.about_language=clickedIndex;

      if(this.hollmattab==0)
      {
      this.getArticels()
      }
      if(this.hollmattab==1)
      {
      this.getAudios();
      }
      if(this.hollmattab==2)
      {
      this.getVideos();
      }


  }

  onTabChangedAll($event) {
    let clickedIndex = $event.index;
    console.log("alltab--"+clickedIndex );
    this.hollmattab=clickedIndex;
    this.about_language=0;    
    this.selectedIndex = 0;
    if(this.hollmattab==0)
      {
      this.getArticels()
      }
      if(this.hollmattab==1)
      {
      this.getAudios();
      }
      if(this.hollmattab==2)
      {
      this.getVideos();
      }
  }




  getArticels(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allarticles/'+this.admin_id+'/'+this.about_language)
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
  getAudios(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allaudio/'+this.admin_id+'/'+this.about_language)
      .subscribe(
        (res) => {
          console.log("jhxgjhlfg-->"+res );
          this.resultaudio = res["result"]["data"];
          console.log(this.result );
          this.loading = false;
          this.hideSpinner('sp3')
          if(!this.resultaudio)
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
  getVideos(): void {
    this.loading = true;
    this.showSpinner('sp3')
    console.log("Texstingfunction");
    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_Allvideos/'+this.admin_id+'/'+this.about_language)
      .subscribe(
        (res) => {
          console.log("Texsting");
          this.resultvideo = res["result"]["data"];
          //console.log(this.result );
          this.loading = false;
          this.hideSpinner('sp3')
          if(!this.resultvideo)
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
        if (parseInt(val.articles_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(MessageForm, {
      minWidth: "40%",
      maxWidth: "40%",
      //data: data,
      data: {
        data: data,        
        about_language:this.about_language,
        admin_id:this.admin_id
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getArticels();
      }
    });
  }
  openDialogvedio(id, res): void {
    var data = null;
    if (id != 0) {
      this[res].forEach(val => {
        if (parseInt(val.video_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(VideoForm, {
      minWidth: "40%",
      maxWidth: "40%",
      //data: data,
      data: {
        data: data,        
        about_language:this.about_language,
        admin_id:this.admin_id
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getVideos();
      }
    });
  }

  openDialogaudio(id, res): void {
    var data = null;
    if (id != 0) {
      this[res].forEach(val => {
        if (parseInt(val.audio_id) === parseInt(id)) {
          data = val;
          console.log(data);
          return false;
        }
      });
    }
    const dialogRef = this.dialog.open(AudioForm, {
      minWidth: "40%",
      maxWidth: "40%",
      //data: data,
      data: {
        data: data,        
        about_language:this.about_language,
        admin_id:this.admin_id
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != 'undefined' && result !== false && result !== 'false') {
        this.getAudios();
      }
    });
  }

  confirmDialog(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewAboutMessage, {
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

  confirmDialogaudio(id, action): void {
    var data = null;
    if (id != 0) {
      data = id;
    }
    const dialogRef = this.dialog.open(PictureViewAboutAudio, {
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
  selector: 'message-form',
  templateUrl: 'message-form.html',
  
})
export class MessageForm {
 
  src = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  MessageFormData: FormGroup;
  loading = false;
  articles_id = 0;
  subresult = [];
  articles_image: string = 'Select Banner Image';
  articles_pdf: string = 'Select Pdf File';
  image_path: string = '';
  pdf_path:string = '';
  about_language=0;
  admin_id=1;
  constructor(
    public dialogRef: MatDialogRef<MessageForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.MessageFormData = new FormGroup({    
      'date': new FormControl('', Validators.required),  
      'tittle': new FormControl('', Validators.required),
     // 'pdf': new FormControl('', Validators.required),
      //'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data.data != null) {
      this.MessageFormData.patchValue({       
        tittle: this.data.data.articles_name,
        //pdf:this.data.data.articles_pdf,
        date: this.data.data.articles_date,
        status: this.data.data.status,
        articles_id: this.data.data.articles_id,
        
      });
      this.articles_id = this.data.data.articles_id;
      this.image_path = this.data.data.articles_image;
      this.pdf_path = this.data.data.articles_pdf;
      this.src=this.image_url+this.data.data.articles_pdf;
    }
    this.about_language=this.data.about_language
    this.admin_id=this.data.admin_id
    console.log("texttttttttt--->"+this.data.about_language);
    
  }

  onSubmit() {
    console.log("text11");
    if (this.pdf_path==null ||  this.pdf_path=='') {
      this._snackBar.open("Choose Pdf File", '', {
        duration: 2000,
      });
      return;
    }
    if (this.MessageFormData.invalid) {
      return;
    }
    console.log("text22"+this.articles_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.articles_id != 0) {
        formData.append('articles_name', this.MessageFormData.value.tittle);       
        formData.append('articles_pdf', this.pdf_path);       
        //formData.append('about_text', this.MessageFormData.value.description);
        formData.append('articles_date', this.MessageFormData.value.date);
        formData.append('status', this.MessageFormData.value.status);
        formData.append('articles_image', this.image_path);
        console.log("text--->"+this.articles_id );
        url = 'update_record/articles/articles_id = ' + this.articles_id;
    } else {
        formData.append('articles_name', this.MessageFormData.value.tittle);
        formData.append('articles_date', this.MessageFormData.value.date);
        formData.append('articles_pdf', this.pdf_path);
       // formData.append('about_text', this.MessageFormData.value.description);
        formData.append('status', this.MessageFormData.value.status);
        formData.append('articles_image', this.image_path);
        formData.append('about_language', this.about_language.toString());
        formData.append('admin_id', this.admin_id.toString());

        url = 'insert_articels';
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
    console.log("test..")
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
          console.log(this[path]);
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

  fileProgressPdf(fileInput: any, name: string, path: string) {
    console.log("test..")
    var fileData = <File>fileInput.target.files[0];
    this[name] = fileData.name;
    this.loading = true;
    var formData = new FormData();
    formData.append('file', fileData);
    this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_pdffile', formData).subscribe(
      (res) => {
        this.loading = false;
        if (res["result"]["error"] === false) {
          this[path] = res["result"]["data"];
          console.log(this[path]);
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
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
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
      this.articles_image = 'Select Banner Image';
    }
  }
  removePdf(url) {
    this[url] = '';
    if (url === 'pdf_path') {
      this.articles_image = 'Select Pdf File';
    }
  }

}


@Component({
  selector: 'video-form',
  templateUrl: 'video-form.html',
})
export class VideoForm {

  id = '';
 
  player:any;
  ytEvent:any;

  playerVars = {
    cc_lang_pref: 'en'
  };

  


  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  VideoFormData: FormGroup;
  loading = false;
  video_id = 0;
  subresult = [];
  video_image: string = 'Select Banner Image';
  articles_pdf: string = 'Select Pdf File';
  image_path: string = '';
  pdf_path:string = '';
  about_language=0;
  admin_id=1;
  constructor(
    public dialogRef: MatDialogRef<MessageForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.VideoFormData = new FormGroup({    
      'date': new FormControl('', Validators.required),  
      'tittle': new FormControl('', Validators.required),
      'youtubevideo_id': new FormControl('', Validators.required),
      //'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data.data != null) {
      this.VideoFormData.patchValue({       
        tittle: this.data.data.video_name,
        youtubevideo_id:this.data.data.video_youtubeid,
        date: this.data.data.video_date,
        status: this.data.data.status,
        video_id: this.data.data.video_id,
        
      });
      this.video_id = this.data.data.video_id;
      this.image_path = this.data.data.video_image;
      //this.pdf_path = this.data.data.articles_pdf;
      this.id=this.data.data.video_youtubeid;
    }
    this.about_language=this.data.about_language
    this.admin_id=this.data.admin_id
    console.log("texttttttttt--->"+this.data.about_language);
    
  }

  

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


  onSubmit() {
    console.log("text11");
    if (this.VideoFormData.invalid) {
      return;
    }
    console.log("text22"+this.video_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.video_id != 0) {
        formData.append('video_name', this.VideoFormData.value.tittle);       
        //formData.append('articles_pdf', this.pdf_path);       
        formData.append('video_youtubeid', this.VideoFormData.value.youtubevideo_id);
        formData.append('video_date', this.VideoFormData.value.date);
        formData.append('status', this.VideoFormData.value.status);
        //formData.append('articles_image', this.image_path);
        console.log("text--->"+this.video_id );
        url = 'update_record/videos/video_id = ' + this.video_id;
    } else {
        formData.append('video_name', this.VideoFormData.value.tittle);
        formData.append('video_youtubeid', this.VideoFormData.value.youtubevideo_id);
        //formData.append('articles_pdf', this.pdf_path);
        formData.append('video_date', this.VideoFormData.value.date);
        formData.append('status', this.VideoFormData.value.status);
        //formData.append('articles_image', this.image_path);
        formData.append('about_language', this.about_language.toString());
        formData.append('admin_id', this.admin_id.toString());

        url = 'insert_videos';
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



}


@Component({
  selector: 'audio-form',
  templateUrl: 'audio-form.html',
})
export class AudioForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  AudioFormData: FormGroup;
  loading = false;
  audio_id = 0;
  subresult = [];
  audio_image: string = 'Select Banner Image';
  audio_link: string = 'Select MP3 File';
  image_path: string = '';
  mp3_path:string = '';
  about_language=0;
  admin_id=1;
  constructor(
    public dialogRef: MatDialogRef<AudioForm>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    this.AudioFormData = new FormGroup({    
      'date': new FormControl('', Validators.required),  
      'tittle': new FormControl('', Validators.required),
      //'mp3': new FormControl('', Validators.required),
      //'description': new FormControl('', Validators.required),
      'status': new FormControl('')
    });
    if (this.data.data != null) {
      this.AudioFormData.patchValue({       
        tittle: this.data.data.audio_name,
        //mp3:this.data.data.audio_link,
        date: this.data.data.audio_date,
        status: this.data.data.status,
        audio_id: this.data.data.audio_id,
        
      });
      this.	audio_id = this.data.data.	audio_id;
      this.image_path = this.data.data.audio_image;
      this.mp3_path = this.data.data.audio_link;
      
    }
    this.about_language=this.data.about_language
    this.admin_id=this.data.admin_id
    console.log("texttttttttt--->"+this.data.about_language);
    
  }









  onSubmit() {
    console.log("text11");
    if (this.mp3_path==null ||  this.mp3_path=='') {
      this._snackBar.open("Choose Audio File", '', {
        duration: 2000,
      });
      return;
    }
    if (this.AudioFormData.invalid) {
      return;
    }
    console.log("text22"+this.audio_id );
    this.loading = true;
    var formData = new FormData();
    var url = '';
    if (this.audio_id != 0) {
        formData.append('audio_name', this.AudioFormData.value.tittle);       
        formData.append('audio_link', this.mp3_path);       
        //formData.append('about_text', this.AudioFormData.value.description);
        formData.append('audio_date', this.AudioFormData.value.date);
        formData.append('status', this.AudioFormData.value.status);
        formData.append('audio_image', this.image_path);
        console.log("text--->"+this.audio_id );
        url = 'update_record/Audios/audio_id = ' + this.audio_id;
    } else {
        formData.append('audio_name', this.AudioFormData.value.tittle);
        formData.append('audio_date', this.AudioFormData.value.date);
        formData.append('audio_link', this.mp3_path);
       // formData.append('about_text', this.AudioFormData.value.description);
        formData.append('status', this.AudioFormData.value.status);
        formData.append('audio_image', this.image_path);
        formData.append('about_language', this.about_language.toString());
        formData.append('admin_id', this.admin_id.toString());

        url = 'insert_Audios';
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
    console.log("test..")
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
          console.log(this[path]);
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

  //http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile

  fileProgressaudio(fileInput: any, name: string, path: string) {
    console.log("test..")
    var fileData = <File>fileInput.target.files[0];
    this[name] = fileData.name;
    this.loading = true;
    var formData = new FormData();
    formData.append('file', fileData);
    this.httpClient.post('http://vallalarforall.com/vallalar_app_api/v1/upload_audiofile', formData).subscribe(
      (res) => {
        this.loading = false;
        if (res["result"]["error"] === false) {
          this[path] = res["result"]["data"];
          console.log(this[path]);
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

  /*editorConfig: AngularEditorConfig = {
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
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
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
  };*/

  removeMedia(url) {
    this[url] = '';
    if (url === 'image_path') {
      this.audio_image = 'Select Banner Image';
    }
  }
  removePdf(url) {
    this[url] = '';
    if (url === 'pdf_path') {
      this.audio_link = 'Select MP3 File';
    }
  }

}











@Component({
  selector: 'messageimage-view',
  templateUrl: 'messageimage-view.html',
})

export class PictureViewAboutMessage {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewAboutMessage>,
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
  selector: 'audioimage-view',
  templateUrl: 'audioimage-view.html',
})

export class PictureViewAboutAudio {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  action: string = '';
  loading = false;
  student_register_id = 0;
  data: any;
  constructor(
    public dialogRef: MatDialogRef<PictureViewAboutAudio>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.datapopup != null) {
      this.action = this.datapopup.action;
      this.data = this.datapopup.data;      
    }
  }
}