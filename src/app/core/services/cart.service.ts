import { Injectable, computed, signal } from '@angular/core';
import { CourseService } from './course.service';

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

  constructor(private courseService: CourseService) {}

  addCourseSignal(course: any) {
    this.cartItems.mutate((val: any) => {
      const courseInCart = !!val.find(
        (cousreCart: any) => cousreCart.id === course.id
      );

      !courseInCart ? val.push(course) : null;
    });

    this.updateLocalStorage();
  }

  removeCourseSignal(id: number) {
    this.cartItems.mutate((val: any) => val.splice(id, 1));

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cartInfo', this.cartItems().toString());
  }

  checkCourseForPurchase(id: number): boolean {
    let courseInCart = false;
    let coursePurchased = false;

    this.cartItems.mutate(
      (val) =>
        (courseInCart = !!val.find((cousreCart: any) => cousreCart.id === id))
    );

    this.courseService.userCourse.mutate(
      (val) => (coursePurchased = !!val.find((course: any) => course.id === id))
    );

    return courseInCart || coursePurchased;
  }

  addUserCourseSignal() {
    this.courseService.userCourse.mutate((val) =>
      val.push(...this.cartItems())
    );

    this.cartItems.mutate((val) => (val.length = 0));

    // this.courseService.userCourse.mutate((val: any) => {
    //   const courseInCart = !!val.find(
    //     (cousreCart: any) => cousreCart.id === course.id
    //   );

    //   !courseInCart ? val.push(course) : null;
    // });

    // this.updateLocalStorage();
  }
}
