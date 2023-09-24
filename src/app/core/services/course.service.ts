import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public courses = toSignal<any[]>(
    this.http.get<any[]>('https://fakestoreapi.com/products')
  );
  public courses$ = toObservable(this.courses);
  constructor(private http: HttpClient) {}
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
