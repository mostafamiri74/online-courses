import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule],
})
export class CartModule {}
