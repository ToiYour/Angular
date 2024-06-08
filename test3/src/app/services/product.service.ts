import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interface';

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
  addProduct(product: IProduct): Observable<object> {
    return this.http.post(`http://localhost:3000/products`, product);
  }
  getById(id: number): Observable<object> {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: IProduct): Observable<object> {
    return this.http.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
}
