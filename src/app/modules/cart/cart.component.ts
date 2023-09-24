import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: any[] = [];
  constructor(public cartService: CartService) {}

  ngOnInit() {}

  remove(i: number) {
    this.cartService.removeCourseSignal(i);
  }
}
