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
    const isSigningOrSignup =
      state.url === '/auth/login' || state.url === '/auth/register';
    // const token = this.authService.token

    // if (isSigningOrSignup) {
    //   if (token) {
    //     if (!this.authService.isExpired) {
    //       this.snackBar.error('شما قبلا وارد شده‌اید.', 'بستن').onAction()
    //       this.router.navigate(['/'])
    //       return false

    //     } else {
    //       this.authService.logout(true)
    //       return true
    //     }

    //   } else return true

    // } else {
    //   if (token) {
    //     if (!this.authService.isExpired) return true
    //     else {
    //       this.authService.logout(true)
    //       this.snackBar.error('لطفا برای ادامه‌ی استفاده از هوما دوباره وارد شوید.', 'بستن').onAction()
    //       this.router.navigate(['/'])
    //       return false
    //     }

    //   } else {
    //     this.router.navigate(['/auth/login'])
    //     return false
    //   }
    // }

    return true;
  }
}
