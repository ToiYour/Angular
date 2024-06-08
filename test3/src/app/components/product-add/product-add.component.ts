import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../interface';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}
  formAdd = this.formbuilder.group({
    name: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    price: [0, [Validators.required]],
  });
  onSubmit = () => {
    console.log(this.formAdd.value);
    if (this.formAdd.invalid) {
      alert('Vui lòng điền đầy đủ thông tin các trường!');
    } else {
      this.productService
        .addProduct(this.formAdd.value as IProduct)
        .subscribe(() => {
          alert('Thêm thành công');
          this.router.navigate(['/']);
        });
    }
  };
}
