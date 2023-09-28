import { HttpClient } from '@angular/common/http';
import { Injectable, computed } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { Observable, delay, filter, find, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  public courses = toSignal<any[]>(
    this.http.get<any[]>('/assets/mock-data/course-list.json')
  );
  public courseDetails = toSignal<any>;

  public courses$ = toObservable(this.courses);

  getCourseDetails(courseName: string): any {
    return this.http
      .get<any[]>('/assets/mock-data/course-list.json')
      .pipe(
        map((res: any) =>
          res.find((s: any) => s.title.toLowerCase().includes(courseName))
        )
      );

    // this.courseDetails = computed(() =>
    //   this.courses()?.find((prev: any) => {
    //     return prev.name === 'آموزش Angular';
    //   })
    // );
  }
}

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate: number;
  count: number;
}
