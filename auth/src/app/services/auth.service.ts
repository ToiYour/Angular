import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private userSubject = new BehaviorSubject<IUser | null>(null);
  user = this.userSubject.asObservable();
  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:3000/users`);
  }
  login(payload: IUser): Observable<IUser[] | null> {
    return this.http
      .get<IUser[] | null>(`http://localhost:3000/users?email=${payload.email}`)
      .pipe(
        tap((response) => {
          if (
            response?.length! > 0 &&
            response?.[0].password == payload.password
          ) {
            this.userSubject.next(response[0]);
          }
        })
      );
  }

  register(payload: IUser): Observable<IUser> {
    return this.http.post<IUser>(`http://localhost:3000/users`, payload);
  }
  delete(id: number): Observable<object> {
    return this.http.delete<IUser>(`http://localhost:3000/users/${id}`);
  }
}
