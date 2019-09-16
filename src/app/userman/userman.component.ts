import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-userman',
  templateUrl: './userman.component.html',
  styleUrls: ['./userman.component.scss']
})
export class UsermanComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }


  ngOnInit() {
  }

}
