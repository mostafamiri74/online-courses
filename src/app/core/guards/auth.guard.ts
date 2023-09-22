import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.authService.token;

    if (state.url === '/auth') {
      if (token) {
        alert('شما قبلا وارد شده‌اید.');
        this.router.navigate(['/']);
        return false;
      } else return true;
    } else {
      if (token) {
        return true;
      } else {
        this.router.navigate(['/auth']);
        return false;
      }
    }
  }
}
