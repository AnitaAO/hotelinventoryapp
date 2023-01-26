import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string ='';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Login(){
    if (this.email==="admin@admin.com" && this.password==="Admin"){
      // alert("Login Successful");
      this.route.navigate(['/rooms', 'add'])
    }
  };

}
