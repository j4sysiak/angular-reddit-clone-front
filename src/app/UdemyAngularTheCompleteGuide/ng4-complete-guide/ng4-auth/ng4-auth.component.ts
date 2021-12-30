import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Ng4AuthService} from './ng4-auth.service';

@Component({
  selector: 'app-ng4-auth',
  templateUrl: './ng4-auth.component.html',
  styleUrls: ['./ng4-auth.component.css']
})
export class Ng4AuthComponent   {

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: Ng4AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          console.log(resData);
        },
        error => {
          console.log(error);
        }
      );
    }

    form.reset();
  }

}
