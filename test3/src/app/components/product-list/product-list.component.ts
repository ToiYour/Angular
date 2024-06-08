import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../interface';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {
    this.productService
      .getAll()
      .subscribe((product) => (this.products = product));
  }
  handleDelete(id: number) {
    if (confirm('Bạn chắc chắn xoá chứ')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter((product) => product.id != id);
        alert('Xoá thành công');
      });
    }
  }
}
