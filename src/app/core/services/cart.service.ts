import { Injectable, Signal, computed, signal } from '@angular/core';
import { CourseService } from './course.service';
import { ICourse } from '../models/course.interface';
import { LocalStorageKey } from '../models/local-storage.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemsSig = signal<ICourse[]>([]);

  public subTotalSig: Signal<number> = computed(() =>
    this.cartItemsSig().reduce((prev: number, curr: ICourse) => {
      return prev + curr.price;
    }, 0)
  );

  public totalItemsSig: Signal<number> = computed(
    () => this.cartItemsSig().length
  );

  constructor(private courseService: CourseService) {
    this.loadCartFromLocalStorage();
  }

  addCourseSignal(course: ICourse) {
    this.cartItemsSig.mutate((val: ICourse[]) => {
      const existCourseInCart: boolean = !!val.find(
        (cousreCart: ICourse) => cousreCart.id === course.id
      );

      !existCourseInCart ? val.push(course) : null;
    });

    this.updateCartInLocalStorage();
  }

  removeCourseSignal(id: number) {
    this.cartItemsSig.mutate((val: ICourse[]) => val.splice(id, 1));

    this.updateCartInLocalStorage();
  }

  updateCartInLocalStorage() {
    this.cartItemsSig.mutate((val: ICourse[]) => {
      localStorage.setItem(LocalStorageKey.CartItems, JSON.stringify(val));
    });
  }

  loadCartFromLocalStorage() {
    this.cartItemsSig.update(() => [
      ...JSON.parse(localStorage.getItem(LocalStorageKey.CartItems) || '[]'),
    ]);
  }

  checkCourseForPurchase(id: number): boolean {
    let existCourseInCart = false;
    let coursePurchased = false;

    this.cartItemsSig.mutate(
      (val: ICourse[]) =>
        (existCourseInCart = !!val.find(
          (cousreCart: ICourse) => cousreCart.id === id
        ))
    );

    this.courseService.userCourseSig.mutate(
      (val: ICourse[]) =>
        (coursePurchased = !!val.find((course: ICourse) => course.id === id))
    );

    return existCourseInCart || coursePurchased;
  }

  addUserCourseSignal() {
    this.courseService.userCourseSig.mutate((val: ICourse[]) => {
      val.push(...this.cartItemsSig());

      localStorage.setItem(LocalStorageKey.UserCourse, JSON.stringify(val));
    });

    this.cartItemsSig.mutate((val: ICourse[]) => (val.length = 0));

    localStorage.removeItem(LocalStorageKey.CartItems);
  }
}
