import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../interface';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
  formProduct = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', Validators.required],
    price: [0, Validators.required],
    quality: [0],
    description: [''],
  });
  onSubmit() {
    if (this.formProduct.invalid) {
      alert('Vui lòng thêm đầy đủ các trường!');
    } else {
      this.productService
        .addProduct(this.formProduct.value as IProduct)
        .subscribe(() => {
          alert('Thêm thành công');
          this.router.navigate(['/products']);
        });
    }
  }
}
