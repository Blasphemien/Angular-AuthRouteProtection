import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {FormGroup} from "@angular/forms";
declare const firebase: any;

@Injectable()
export class AuthService {

  constructor() { }

  signupUser(user: User){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  }
}
