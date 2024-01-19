import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';
import { ICourse } from '../models/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  public courses = toSignal<ICourse[]>(
    this.http.get<ICourse[]>('/assets/mock-data/course-list.json')
  );
  public courses$ = toObservable(this.courses);

  public userCourse = signal<ICourse[]>([]);

  getCourseDetails(courseName: string): Observable<ICourse> {
    return this.http
      .get<ICourse[]>('/assets/mock-data/course-list.json')
      .pipe(
        map((res: any) =>
          res.find((course: ICourse) =>
            course.title.toLowerCase().includes(courseName)
          )
        )
      );
  }
}
