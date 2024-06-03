import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../../../interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(private ProductService: ProductService, private router: Router) {}
  product: IProduct = {
    name: '',
    desc: '',
    price: 0,
  };
  onSubmit() {
    this.ProductService.addProduct(this.product).subscribe(() =>
      this.router.navigate(['/'])
    );
  }
}
