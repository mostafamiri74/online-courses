import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  public courses: any[] = [];
  constructor(
    private courseService: CourseService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  onAddToCart() {
    this.cartService.addCourseSignal({
      id: 3,
      title: 'a',
      price: 4500,
      category: 'aa',
      description: 'aa',
      image: 'aa',
      rating: {
        rate: 4,
        count: 4,
      },
    });
  }
}
