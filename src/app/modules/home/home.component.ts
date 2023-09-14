import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import {
  faUser,
  faClock,
  faCircleUser,
  faNewspaper,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faUser = faUser;
  faClock = faClock;
  faCircleUser = faCircleUser;
  faNewspaper = faNewspaper;

  items: MegaMenuItem[] | undefined;
  profileItems: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'دوره ها',
        items: [
          [
            {
              label: 'طراحی وب',
              items: [
                { label: 'آموزش HTML' },
                { label: 'آموزش CSS' },
                { label: 'آموزش بوت استرپ' },
                { label: 'آموزش جاوااسکریپت' },
                { label: 'آموزش انگولار' },
                { label: 'آموزش ری اکت' },
                { label: 'آموزش ویو' },
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
          },
          {
            label: 'دوره های من',
            icon: 'pi pi-save',
          },
          {
            label: 'اطلاعات کاربری',
            icon: 'pi pi-user',
          },
          {
            label: 'خروج',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
  }
}
