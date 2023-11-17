import { Component } from '@angular/core';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss'],
})
export class MyCourseComponent {
  constructor(public courseService: CourseService) {}
}
