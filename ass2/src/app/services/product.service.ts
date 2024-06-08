import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  delete(id: number): Observable<object> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  addProduct(payload: IProduct): Observable<object> {
    return this.http.post(`http://localhost:3000/products`, payload);
  }
  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(payload: IProduct): Observable<object> {
    return this.http.put(
      `http://localhost:3000/products/${payload.id}`,
      payload
    );
  }
}
