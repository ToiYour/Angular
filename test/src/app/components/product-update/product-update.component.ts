import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css',
})
export class ProductUpdateComponent {
  product: IProduct = {
    name: '',
    desc: '',
    price: 0,
  };
  id!: number | string;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(
      (params) => (this.id = params.get('id') as string)
    );
    this.ProductService.getProductById(this.id as number).subscribe(
      (product) => {
        this.product = product;
      }
    );
  }
  onSubmit() {
    this.ProductService.updateProduct(
      this.id as number,
      this.product
    ).subscribe(() => this.router.navigate(['/']));
  }
}
