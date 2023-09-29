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

  currentUserName: string = '';

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
                { label: 'آموزش CSS', routerLink: ['/course/css'] },
                { label: 'آموزش بوت استرپ', routerLink: ['/course/bootstrap'] },
                {
                  label: 'آموزش جاوااسکریپت',
                  routerLink: ['/course/javascript'],
                },
                { label: 'آموزش انگولار', routerLink: ['/course/angular'] },
                { label: 'آموزش ری اکت', routerLink: ['/course/react'] },
                { label: 'آموزش ویو', routerLink: ['/course/vue'] },
              ],
            },
          ],
          [
            {
              label: 'سخت افزار',
              items: [{ label: 'اسمبل کامپویتر' }, { label: 'تعمیر قطعات' }],
            },
            {
              label: 'مهندسی داده',
              items: [
                { label: 'جمع آوری داده ها' },
                { label: 'تحلیل داده ها' },
              ],
            },
          ],
          [
            {
              label: 'برنامه نویسی اندروید',
              items: [{ label: 'کاتلین' }, { label: 'فلاتر' }],
            },
            {
              label: 'سخت افزار موبایل',
              items: [{ label: 'عیب یابی' }, { label: 'تعمیر قطعات' }],
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
    this.currentUserName = this.authService.currentUserName;
  }

  private logout() {
    this.authService.logout();
    this.getCurrentUser();
  }
}
