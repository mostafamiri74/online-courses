import { Injectable, computed, signal } from '@angular/core';
import { CourseService } from './course.service';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems = signal<any[]>([]);

  public subTotal = computed(() =>
    this.cartItems().reduce((prev: any, curr: any) => {
      return prev + curr.price;
    }, 0)
  );

  public totalItems = computed(() => this.cartItems().length);

  constructor(private course: CourseService) {}

  addCourseSignal(course: any) {
    this.cartItems.mutate((val: any) => {
      const courseInCart = !!val.find(
        (cousreCart: any) => cousreCart.id === course.id
      );

      !courseInCart ? val.push(course) : null;
    });
    // this.course.courses()?.forEach((a) => {
    //   if (a.id === course?.id) {
    //     a.rating.count = a.rating.count - 1;
    //   }
    // });
  }

  removeCourseSignal(id: number) {
    this.cartItems.mutate((val: any) => {
      const course = val.splice(id, 1);
      // this.course.courses()?.forEach((a) => {
      //   if (a.id === course[0].id) {
      //     a.rating.count = a.rating.count + 1;
      //   }
      // });
    });
  }

  checkExistCourseInCart(id: number): boolean {
    let courseInCart = false;

    this.cartItems.mutate(
      (val) =>
        (courseInCart = !!val.find((cousreCart: any) => cousreCart.id === id))
    );

    return courseInCart;
  }
}
