import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserModel } from '../models/user.interface';
import { LocalStorageKey } from '../models/local-storage.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = '/assets/mock-data/auth/';
  public currentUserSubject!: BehaviorSubject<IUserModel>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUserModel | any>({
      userName: localStorage.getItem(LocalStorageKey.UserName) || '',
      accessToken: localStorage.getItem(LocalStorageKey.AccessToken) || '',
      refreshToken: localStorage.getItem(LocalStorageKey.RefreshToken) || '',
    });
  }

  public signup(userSignupInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + `sign-up`, userSignupInfo);
  }

  public login(userLoginInfo: any): Observable<any> {
    return this.http.get<any>(this.endPoint + `login.json`, userLoginInfo);
  }

  public logout(): void {
    localStorage.clear();
    this.currentUserSubject.next({} as IUserModel);
  }

  public get currentUser(): any {
    return this.currentUserSubject.asObservable();
  }

  public set currentUser(value: IUserModel) {
    this.currentUserSubject.next(value);
  }

  public setUser(userInfo: IUserModel) {
    localStorage.setItem(LocalStorageKey.UserName, userInfo.userName);
    localStorage.setItem(LocalStorageKey.AccessToken, userInfo.accessToken);
    localStorage.setItem(LocalStorageKey.RefreshToken, userInfo.refreshToken);

    this.currentUser = userInfo;
  }

  public get token(): string | null {
    return localStorage.getItem(LocalStorageKey.AccessToken);
  }
}
