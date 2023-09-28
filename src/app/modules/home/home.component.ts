import { Component } from '@angular/core';
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
}
