import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == ' '){
      alert('Email Needed!!!')
      return;
    }

    if(this.password == ' '){
      alert('Password Needed!!!')
      return;
    }

    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';

  }

  signup(){
    if(this.email == ' '){
      alert('Email Needed!!!')
      return;
    }

    if(this.password == ' '){
      alert('Password Needed!!!')
      return;
    }

    this.auth.signup(this.email,this.password);
    this.email = '';
    this.password = '';

  }



}
