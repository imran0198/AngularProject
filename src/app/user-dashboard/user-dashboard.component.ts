import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
   ruser=(localStorage.getItem("UserName"))
   rpass=(localStorage.getItem("Password"))
   luser=(localStorage.getItem("LoginUserName"))
   lpass=(localStorage.getItem("LoginPassword"))

  constructor() { }


  ngOnInit(): void {
  }

}
