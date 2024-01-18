import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  remove(i: number) {
    this.cartService.removeCourseSignal(i);
  }

  addCoursesToUser() {
    if (this.authService.token) {
      this.cartService.addUserCourseSignal();
    } else {
      this.router.navigate(['/auth']);

      this.messageService.add({
        key: 'br',
        severity: 'info',
        detail: 'ابتدا باید وارد سایت شوید.',
      });
    }
  }
}
