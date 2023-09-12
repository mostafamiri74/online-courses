import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
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

  items: MenuItem[] | undefined;
  profileItems: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'دوره ها',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
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
