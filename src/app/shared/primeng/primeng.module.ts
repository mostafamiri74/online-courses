import { NgModule } from '@angular/core';

import { MegaMenuModule } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ChartModule } from 'primeng/chart';

const modules = [
  MegaMenuModule,
  ButtonModule,
  MenubarModule,
  MenuModule,
  CardModule,
  InputTextModule,
  MessagesModule,
  ChartModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class PrimengModule {}
