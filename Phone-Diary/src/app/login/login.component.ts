import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public login: LoginService){

  }

  loginForm!: FormGroup;
  // ausername = "admin";
  // apassword = "test123";

  // authenticate = true;
  // disable = false;


  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    });
    
    // console.log(this.loginForm.value.username);
  }

  onSubmit(){
    this.login.isvaliduser(this.loginForm.value.username, this.loginForm.value.password)
  }




}
