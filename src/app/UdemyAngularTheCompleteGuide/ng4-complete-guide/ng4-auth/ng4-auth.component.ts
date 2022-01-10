import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, Ng4AuthService} from './ng4-auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Ng4AlertComponent} from '../shared/ng4-alert/ng4-alert.component';

@Component({
  selector: 'app-ng4-auth',
  templateUrl: './ng4-auth.component.html',
  styleUrls: ['./ng4-auth.component.css']
})
export class Ng4AuthComponent   {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: Ng4AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertCmp = new Ng4AuthComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(Ng4AlertComponent);

  }
}



























