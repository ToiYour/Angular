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
  formUpdate = this.formbuilder.group({
    name: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    price: [0, [Validators.required]],
  });
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.productService
        .getById(Number(id))
        .subscribe((product) => this.formUpdate.patchValue(product));
    });
  }
  onSubmit = () => {
    console.log(this.formUpdate.value);
    if (this.formUpdate.invalid) {
      alert('Vui lòng điền đầy đủ thông tin các trường!');
    } else {
      const id = this.route.snapshot.params['id'];
      const payload = {
        id,
        ...this.formUpdate.value!,
      };
      this.productService.updateProduct(payload as IProduct).subscribe(() => {
        alert('Cập nhập thành công');
        this.router.navigate(['/']);
      });
    }
  };
}
