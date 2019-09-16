import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
   }
/* Sign up */
signUp(email: string, password: string) {
  this.angularFireAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Successfully signed up!', res);
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
}

/* Sign in */
login(email: string, password: string) {
  this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('Successfully signed in!');
    })
    .catch(err => {
      console.log('Something is wrong:', err.message);
    });
}

/* Sign out */
signOut() {
  this.angularFireAuth
    .auth
    .signOut();
}

}

