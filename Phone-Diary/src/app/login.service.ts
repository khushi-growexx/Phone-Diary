import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn:boolean = false;
  ausername = "admin";
  apassword = "test123";
  disable = true;

  // constructor(private login: LoginComponent) { }

  isAuthenticated(){
    return this.loggedIn;
  }

  isvaliduser(username:string, password:string){
    if(username==this.ausername && password==this.apassword){
      this.loggedIn = true;
    }
    else{
      console.log("Unauthorized User");
      
    }
  }

  
}
