import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dashboard(){
  let ruser=(localStorage.getItem("UserName"))
  let rpass=(localStorage.getItem("Password"))
  let luser=(localStorage.getItem("LoginUserName"))
  let lpass=(localStorage.getItem("LoginPassword"))

  if(ruser===luser && rpass===lpass && ruser!=null && rpass!=null && luser!=null && lpass!=null){
    return true
  }else {
    return false
  }
  }
  constructor() { }
}
