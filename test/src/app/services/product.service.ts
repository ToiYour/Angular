import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  delete(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  addProduct(product: IProduct): Observable<Object> {
    return this.http.post(`http://localhost:3000/products`, product);
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(id: number, product: IProduct): Observable<Object> {
    return this.http.put(`http://localhost:3000/products/${id}`, product);
  }
}
