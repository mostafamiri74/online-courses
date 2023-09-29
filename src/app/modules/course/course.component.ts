import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, delay, find } from 'rxjs';
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

  constructor(
    private courseService: CourseService,
    private cartService: CartService,
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
  }

  onAddToCart() {
    this.courseDetails$.subscribe((res: any) => {
      this.cartService.addCourseSignal(res);
    });
  }
}
