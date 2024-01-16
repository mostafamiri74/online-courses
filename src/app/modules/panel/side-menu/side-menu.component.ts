import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  items: MenuItem[] | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'داشبورد',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['dashboard'],
      },
      {
        label: 'دوره های من',
        icon: 'pi pi-fw pi-save',
        routerLink: ['my-course'],
      },
      // {
      //   label: 'ویرایش اطلاعات',
      //   icon: 'pi pi-fw pi-user',
      //   routerLink: ['profile'],
      // },
      {
        label: 'صفحه خانه',
        icon: 'pi pi-fw pi-home',
        routerLink: [''],
      },
      {
        label: 'خروج',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  private logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
