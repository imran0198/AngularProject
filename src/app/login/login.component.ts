import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
onSubmit(form:NgForm){
  let user=(localStorage.getItem("UserName"))
  let pass=(localStorage.getItem("Password"))
  localStorage.setItem("LoginUserName",form.value.uename)
  localStorage.setItem("LoginPassword",form.value.upass)

  
  // if(form.value.uename===user && form.value.upass===pass){
  //   console.log("success");
    
  // }else{
  //   console.log("failed");
    
  // }
}
  constructor() { }

  ngOnInit(): void {
  }

}
