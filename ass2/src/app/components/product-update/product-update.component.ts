import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../interface';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css',
})
export class ProductUpdateComponent {
  constructor(
    private formbuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  formProduct = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    image: ['', Validators.required],
    price: [0, Validators.required],
    quality: [0],
    description: [''],
  });
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productService.getById(id).subscribe((data: IProduct) => {
      this.formProduct.patchValue(data);
    });
  }
  onSubmit() {
    if (this.formProduct.invalid) {
      alert('Vui lòng thêm đầy đủ các trường!');
    } else {
      const id = this.route.snapshot.params['id'];
      this.productService
        .updateProduct({ id, ...this.formProduct.value } as IProduct)
        .subscribe(() => {
          alert('Cập nhập thành công');
          this.router.navigate(['/products']);
        });
    }
  }
}
