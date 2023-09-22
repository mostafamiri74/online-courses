import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.interface';
import { LocalStorageKey } from '../models/local-storage.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = '/assets/mock-data/auth/';
  private currentUserSubject!: BehaviorSubject<any>;

  constructor(private http: HttpClient) {}

  public signup(userSignupInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + `sign-up`, userSignupInfo);
  }

  public login(userLoginInfo: any): Observable<any> {
    return this.http.get<any>(this.endPoint + `login.json`, userLoginInfo);
  }

  public logout(): void {
    localStorage.clear();
    // this.currentUserSubject.next({} as UserModel);
  }

  public get currentUserName(): string {
    return localStorage.getItem(LocalStorageKey.UserName) || '';
  }

  public get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  public set currentUserValue(value: UserModel) {
    this.currentUserSubject.next(value);
  }

  public setUser(userInfo: UserModel) {
    localStorage.setItem(LocalStorageKey.UserName, userInfo.userName);
    localStorage.setItem(LocalStorageKey.AccessToken, userInfo.accessToken);
    localStorage.setItem(LocalStorageKey.RefreshToken, userInfo.refreshToken);

    // this.currentUserValue = userInfo;ss
  }

  public get token(): string | null {
    return localStorage.getItem(LocalStorageKey.AccessToken);
  }
}
