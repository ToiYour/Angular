import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(payload: any): Observable<object> {
    return this.http.post(`http://localhost:3000/register`, payload);
  }
  login(payload: any): Observable<object> {
    return this.http.post(`http://localhost:3000/login`, payload);
  }
}
