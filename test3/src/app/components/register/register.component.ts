import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  comparePassword: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return {
        passwordiscompare: true,
      };
    }
    return null;
  };
  formRegister = this.formbuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: this.comparePassword,
    }
  );
  onSubmit = () => {
    console.log(this.formRegister.value);
    if (this.formRegister.invalid) {
      alert('Vui lòng điền đầy đủ thông tin các trường!');
    } else {
      this.authService.register(this.formRegister.value).subscribe(
        (user) => {
          alert('Thêm thành công');
          this.router.navigate(['/login']);
        },
        (err) => {
          console.log(err);

          alert(err.error);
        }
      );
    }
  };
}
