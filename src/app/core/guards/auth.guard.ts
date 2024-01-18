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
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

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
        this.router.navigate(['/']);

        this.messageService.add({
          key: 'br',
          severity: 'error',
          detail: 'شما قبلا وارد شده‌اید.',
        });

        return false;
      } else return true;
    } else {
      if (token) {
        return true;
      } else {
        this.router.navigate(['/auth']);

        this.messageService.add({
          key: 'br',
          severity: 'error',
          detail: 'لطفا دوباره وارد شوید.',
        });

        return false;
      }
    }
  }
}
