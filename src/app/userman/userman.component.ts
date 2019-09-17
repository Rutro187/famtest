import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userman',
  templateUrl: './userman.component.html',
  styleUrls: ['./userman.component.scss']
})
export class UsermanComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }
  signUp() {
    if (this.signupForm.invalid) {
      console.log('Fix your Errors');
      return;
    }
    this.authenticationService.signUp(this.email.value, this.password.value);


      }


  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',  Validators.required],
    });
  }

}
