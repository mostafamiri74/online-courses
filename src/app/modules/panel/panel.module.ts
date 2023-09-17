import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyCourseComponent } from './my-course/my-course.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [PanelComponent, DashboardComponent, SideMenuComponent, MyCourseComponent, ProfileComponent],
  imports: [CommonModule, PanelRoutingModule, SharedModule],
})
export class PanelModule {}
