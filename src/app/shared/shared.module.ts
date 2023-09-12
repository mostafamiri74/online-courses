import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [ButtonModule, MenubarModule, MenuModule],
  exports: [ButtonModule, MenubarModule, MenuModule],
})
export class SharedModule {}
