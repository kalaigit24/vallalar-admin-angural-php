import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  messages='';

  constructor(private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {

    
    if(this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'Vallalar@123') {
      this.router.navigateByUrl('/trustmessage');

    } else {
      
        this._snackBar.open('Invalid login details', '', {
         duration: 2000,
        panelClass:"error-snackbar"
  
});
    }
}







}
