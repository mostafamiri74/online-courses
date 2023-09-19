import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = `test/`;
  private currentUserSubject!: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) {}

  public signup(userSignupInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + `sign-up`, userSignupInfo);
  }

  public login(userLoginInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + 'login', userLoginInfo);
  }

  public logout(): void {
    localStorage.clear();
    // this.currentUserSubject.next({} as UserModel);
  }

  
  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

}
