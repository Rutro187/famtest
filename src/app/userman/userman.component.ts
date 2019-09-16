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

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  // signUp() {
  //   this.authenticationService.SignUp(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  // }


  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',  Validators.required],
    })
  }

}