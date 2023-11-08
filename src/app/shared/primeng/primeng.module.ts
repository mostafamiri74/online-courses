import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';
import { PasswordModule } from 'primeng/password';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';

const modules = [
  ButtonModule,
  MenubarModule,
  MenuModule,
  CardModule,
  InputTextModule,
  MessagesModule,
  ChartModule,
  ProgressBarModule,
  PasswordModule,
  BadgeModule,
  ToastModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class PrimengModule {}
