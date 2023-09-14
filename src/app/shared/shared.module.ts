import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PrimengModule } from './primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [PrimengModule, HttpClientModule, ReactiveFormsModule],
  exports: [PrimengModule, HttpClientModule, ReactiveFormsModule],
})
export class SharedModule {}
