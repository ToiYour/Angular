import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../interface';
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
  constructor(private ProductService: ProductService) {
    this.ProductService.getAll().subscribe(
      (products) => (this.products = products)
    );
  }
  handleDelete(id: number) {
    if (confirm('Bạn chắc chắn xoá chứ?')) {
      this.products = this.products.filter((p) => p.id != id);
      this.ProductService.delete(id).subscribe(() => alert('Xoá thành công'));
    }
  }
}
