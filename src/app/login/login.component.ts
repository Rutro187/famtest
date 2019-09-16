import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

    get email(){
      return this.loginForm.get('email')
    }

    get password(){
      return this.loginForm.get('password')
    }
    login() {
      if (this.loginForm.invalid){
        console.log("Fix your Errors");
        return;
      }
      this.authenticationService.login(this.email.value, this.password.value);
      
      
        }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',  Validators.required],
    })
  }

}
