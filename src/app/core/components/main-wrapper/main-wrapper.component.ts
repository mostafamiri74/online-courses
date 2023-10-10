import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent {
  items: MegaMenuItem[] | undefined;
  profileItems: MenuItem[] | undefined;

  currentUserName: any = '';

  constructor(
    private authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'دوره ها',
        items: [
          [
            {
              label: 'طراحی وب',
              items: [
                { label: 'آموزش HTML', routerLink: ['/course/html'] },
                {
                  label: 'آموزش جاوااسکریپت',
                  routerLink: ['/course/javascript'],
                },
                {
                  label: 'آموزش تایپ اسکریپت',
                  routerLink: ['/course/typescript'],
                },
                { label: 'آموزش ری اکت', routerLink: ['/course/react'] },
                { label: 'آموزش پایتون', routerLink: ['/course/python'] },
                { label: 'آموزش وردپرس', routerLink: ['/course/wordpress'] },
              ],
            },
          ],
          [
            {
              label: 'سخت افزار',
              items: [
                { label: 'آموزش جاوا', routerLink: ['/course/java'] },
                { label: 'آموزش Go', routerLink: ['/course/go'] },
                {
                  label: 'آموزش ماشین',
                  routerLink: ['/course/machine-learning'],
                },
              ],
            },
            {
              label: 'مهندسی داده',
              items: [
                { label: 'آموزش PHP', routerLink: ['/course/php'] },
                { label: 'آموزش لاراول', routerLink: ['/course/laravel'] },
              ],
            },
          ],
          [
            {
              label: 'برنامه نویسی اندروید',
              items: [
                { label: 'آموزش Node js', routerLink: ['/course/nodejs'] },
                { label: 'آموزش فلاتر', routerLink: ['/course/flutter'] },
                { label: 'آموزش تحلیل داده', routerLink: ['/course/big-data'] },
              ],
            },
            {
              label: 'سخت افزار موبایل',
              items: [
                { label: 'آموزش شی گرایی', routerLink: ['/course/oop'] },

                { label: 'آموزش لینوکس', routerLink: ['/course/linux'] },
              ],
            },
          ],
        ],
      },
      {
        label: 'وبلاگ',
      },
      {
        label: 'کتابخانه',
      },
    ];

    this.profileItems = [
      {
        items: [
          {
            label: 'داشبورد',
            icon: 'pi pi-chart-bar',
            routerLink: ['/panel/dashboard'],
          },
          {
            label: 'دوره های من',
            icon: 'pi pi-save',
            routerLink: ['/panel/my-course'],
          },
          {
            label: 'اطلاعات کاربری',
            icon: 'pi pi-user',
            routerLink: ['/panel/profile'],
          },
          {
            label: 'خروج',
            icon: 'pi pi-sign-out',
            command: () => {
              this.logout();
            },
          },
        ],
      },
    ];

    this.getCurrentUser();
  }

  private getCurrentUser() {
    this.authService.currentUser.subscribe(
      (user: any) => (this.currentUserName = user.userName)
    );
  }

  private logout() {
    this.authService.logout();
    this.getCurrentUser();
  }
}
