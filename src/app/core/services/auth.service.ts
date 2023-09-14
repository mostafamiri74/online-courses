import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endPoint = `test/`;

  constructor(private http: HttpClient) {}

  public signup(userSignupInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + `sign-up`, userSignupInfo);
  }

  public login(userLoginInfo: any): Observable<any> {
    return this.http.post<any>(this.endPoint + 'login', userLoginInfo);
  }
}
