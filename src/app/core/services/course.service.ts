import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';
import { ICourse } from '../models/course.interface';
import { LocalStorageKey } from '../models/local-storage.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public coursesSig = toSignal<ICourse[]>(
    this.http.get<ICourse[]>('/assets/mock-data/course-list.json')
  );
  public courses$ = toObservable(this.coursesSig);

  public userCourseSig = signal<ICourse[]>([]);

  constructor(private http: HttpClient) {
    this.loadUserCourseFromLocalStorage();
  }

  loadUserCourseFromLocalStorage() {
    this.userCourseSig.update(() => [
      ...JSON.parse(localStorage.getItem(LocalStorageKey.UserCourse) || '[]'),
    ]);
  }

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
