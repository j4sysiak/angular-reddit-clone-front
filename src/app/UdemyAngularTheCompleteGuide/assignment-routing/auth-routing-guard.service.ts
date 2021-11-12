import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthRoutingService} from './auth-routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRoutingGuardService implements CanActivate {

  constructor(private authService: AuthRoutingService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/home-routing']);
          }
        }
      );
  }
}
