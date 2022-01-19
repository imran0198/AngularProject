import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  // regForm=new FormGroup({
  //   ename:new FormControl(""),
  //   epass:new FormControl("")
  // })
  // get ename(){
  //   return this.regForm.get("ename")
  // }
  // get epass(){
  //   return this.regForm.get("epass")
  // }
  // addData(){
  //   console.log(this.regForm.value);
  //   localStorage.setItem("regForm",JSON.stringify(this.regForm.value))
    
  // }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(form.value.upass);
    localStorage.setItem("UserName",form.value.uename)
    localStorage.setItem("Password",form.value.upass)
    window.alert("Data submitted")
    
  }
  constructor() { }


  ngOnInit(): void {
  }

}
