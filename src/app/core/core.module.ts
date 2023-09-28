import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';

@NgModule({
  declarations: [MainWrapperComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  providers: [],
})
export class CoreModule {}
