
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  result = [];
  loading = false;
  user_id ;
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getUsers();
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
      this.user_id=id;
      this.memberDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  memberDelete() : void{
    if (this.user_id == null || this.user_id == 0) {
      return;
    }
    this.loading = true;
var table = 'User'
var where = 'user_id='+this.user_id;

    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getUsers();
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
  getUsers(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_users')
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

  openView(id, res): void {
    var data = null;
      if(id != 0) { 
      this[res].forEach(val=> {
           if(parseInt(val.user_id) === parseInt(id)) {
                data = val;
                return false;
           }
         });
      }
    const dialogRef = this.dialog.open(MemberViewForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  confirmDelete(id): void {
    var data = null;
    if (id != 0) {
      data = {id: id, from: 'result'};
    }
    const dialogRef = this.dialog.open(MemberDelete, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== false && result !== 'false') {
        this.getUsers();
      }
    });
  }

}


@Component({
  selector: 'memberview',
  templateUrl: 'memberview.html',
})

export class MemberViewForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  loading = false;
  data: any;
  tag = [];
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<MemberViewForm>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) { 
        this.data = this.datapopup;
    }

    ngOnInit() {
      
    }
   

}


@Component({
  selector: 'memberdelete',
  templateUrl: 'memberdelete.html',
})
export class MemberDelete {
  loading = false;
  user_id = 0; 
  constructor(
    public dialogRef: MatDialogRef<MemberDelete>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) {
    if (this.data != null) {
        if(this.data.from === 'result') {
      this.user_id = this.data.id;
      }
     
    }
  }

  confirmDelete() {
    if (this.user_id == null || this.user_id == 0) {
      return;
    }
    this.loading = true;
var table = 'User'
var where = 'user_id='+this.user_id;

    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
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