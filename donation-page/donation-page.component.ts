
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.css']
})
export class DonationPageComponent implements OnInit {
  result = [];
  loading = false;
  donation_id ;
  constructor(private confirmationDialogService: ConfirmationDialogService,public dialog: MatDialog, private httpClient: HttpClient, private _snackBar: MatSnackBar,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    
    this.getdonation();
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

  public openConfirmationDialog(donation_id: void) {
    this.confirmationDialogService.confirm('Please confirm..', 'Are you sure? Do you want to delete this record? You cant recover it!')
    .then((confirmed) => {
      console.log('User confirmed:', confirmed)
      if(confirmed==true)
      {
      this.donation_id=donation_id;
      this.memberDelete();
      }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  memberDelete() : void{
    if (this.donation_id == null || this.donation_id == 0) {
      return;
    }
    this.loading = true;
var table = 'donation'
var where = 'donation_id='+this.donation_id
    this.loading = true;
    this.showSpinner('sp3') 


    this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
      (res) => {
        this.loading = false;
        this.loading = false;
        this.hideSpinner('sp3')
        this.getdonation();
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
  getdonation(): void {
    this.loading = true;
    this.showSpinner('sp3')

    this.httpClient.get<any>('http://vallalarforall.com/vallalar_app_api/v1/get_donation')
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
           if(parseInt(val.donation_id) === parseInt(id)) {
                data = val;
                return false;
           }
         });
      }
    const dialogRef = this.dialog.open(DonationViewForm, {
      minWidth: "40%",
      maxWidth: "40%",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  // confirmDelete(id): void {
  //   var data = null;
  //   if (id != 0) {
  //     data = {id: id, from: 'result'};
  //   }
  //   const dialogRef = this.dialog.open(MemberDelete, {
  //     minWidth: "40%",
  //     maxWidth: "40%",
  //     data: data
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result !== false && result !== 'false') {
  //       this.getUsers();
  //     }
  //   });
  // }

}


@Component({
  selector: 'donationview',
  templateUrl: 'donationview.html',
})

export class DonationViewForm {
  image_url: string = 'http://vallalarforall.com/vallalar_app_api/v1/';
  loading = false;
  data: any;
  tag = [];
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DonationViewForm>,
    @Inject(MAT_DIALOG_DATA) public datapopup: any,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient) { 
        this.data = this.datapopup;
    }

    ngOnInit() {
      
    }
   

}


// @Component({
//   selector: 'memberdelete',
//   templateUrl: 'memberdelete.html',
// })
// export class MemberDelete {
//   loading = false;
//   id = 0; 
//   constructor(
//     public dialogRef: MatDialogRef<MemberDelete>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private _snackBar: MatSnackBar,
//     private httpClient: HttpClient) {
//     if (this.data != null) {
//         if(this.data.from === 'result') {
//       this.id = this.data.id;
//       }
     
//     }
//   }

//   confirmDelete() {
//     if (this.id == null || this.id == 0) {
//       return;
//     }
//     this.loading = true;
// var table = 'User'
// var where = 'id='+this.id;

//     this.httpClient.get('http://vallalarforall.com/vallalar_app_api/v1/delete_record/'+ table +'/' + where).subscribe(
//       (res) => {
//         this.loading = false;
//         if (res["result"]["error"] === false) {
//           this.dialogRef.close(true);
//         } else {
//           this._snackBar.open(res["result"]["message"], '', {
//             duration: 2000,
//           });
//         }
//       },
//       (error) => {
//         this.loading = false;
//         this._snackBar.open(error["statusText"], '', {
//           duration: 2000,
//         });
//       }
//     );
//   }
// }