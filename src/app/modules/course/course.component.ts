import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/core/models/course.interface';
import { CartService } from 'src/app/core/services/cart.service';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent {
  courseDetails$!: Observable<ICourse>;
  disableAddToCart: boolean = false;

  constructor(
    private courseService: CourseService,
    private cartService: CartService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(() => this.getCourseDetails());
  }

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails() {
    const courseName = this.route.parent!.snapshot.url[1].path;

    this.courseDetails$ = this.courseService.getCourseDetails(courseName);

    this.courseDetails$.subscribe((res) => {
      this.disableAddToCart = this.cartService.checkCourseForPurchase(res.id);
    });
  }

  onAddToCart(course: any) {
    this.cartService.addCourseSignal(course);

    this.disableAddToCart = true;
    this.messageService.add({
      key: 'br',
      severity: 'success',
      detail: 'دوره مورد نظر به سبد خرید افزوده شد.',
    });
  }
}
