import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { LocalStorageKey } from '../models/local-storage.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = '/assets/mock-data/auth/';
  public currentUserSubject!: BehaviorSubject<IUser>;

  constructor(private http: HttpClient) {
    this.getUserToLocalStorage();
  }

  private getUserToLocalStorage(): void {
    this.currentUserSubject = new BehaviorSubject<IUser>({
      userName: localStorage.getItem(LocalStorageKey.UserName) || '',
      accessToken: localStorage.getItem(LocalStorageKey.AccessToken) || '',
      refreshToken: localStorage.getItem(LocalStorageKey.RefreshToken) || '',
    });
  }

  public login(userLoginInfo: any): Observable<IUser | any> {
    return this.http.get<IUser>(this.endPoint + `login.json`, userLoginInfo);
  }

  public logout(): void {
    localStorage.clear();
    this.currentUserSubject.next({} as IUser);
  }

  public get currentUser(): Observable<IUser> {
    return this.currentUserSubject.asObservable();
  }

  public set currentUser(value: IUser) {
    this.currentUserSubject.next(value);
  }

  public setUserToLocalStorage(userInfo: IUser) {
    localStorage.setItem(LocalStorageKey.UserName, userInfo.userName);
    localStorage.setItem(LocalStorageKey.AccessToken, userInfo.accessToken);
    localStorage.setItem(LocalStorageKey.RefreshToken, userInfo.refreshToken);

    this.currentUser = userInfo;
  }

  public get token(): string | null {
    return localStorage.getItem(LocalStorageKey.AccessToken);
  }
}
