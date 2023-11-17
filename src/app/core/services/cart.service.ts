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
    // this.course.courses()?.forEach((a) => {
    //   if (a.id === course?.id) {
    //     a.rating.count = a.rating.count - 1;
    //   }
    // });

    this.updateLocalStorage();
  }

  removeCourseSignal(id: number) {
    this.cartItems.mutate((val: any) => val.splice(id, 1));

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('cartInfo', this.cartItems().toString());
  }

  checkExistCourseInCart(id: number): boolean {
    let courseInCart = false;

    this.cartItems.mutate(
      (val) =>
        (courseInCart = !!val.find((cousreCart: any) => cousreCart.id === id))
    );

    return courseInCart;
  }

  addUserCourseSignal() {
    this.courseService.userCourse = this.cartItems;

    this.courseService.userCourse.mutate((val) => console.log(val));

    // this.courseService.userCourse.mutate((val: any) => {
    //   const courseInCart = !!val.find(
    //     (cousreCart: any) => cousreCart.id === course.id
    //   );

    //   !courseInCart ? val.push(course) : null;
    // });

    // this.updateLocalStorage();
  }
}
