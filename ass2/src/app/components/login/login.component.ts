import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  formAuth = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  onSubmit() {
    if (this.formAuth.invalid) {
      alert('Vui lòng thêm đầy đủ các trường!');
    } else {
      this.authService.login(this.formAuth.value).subscribe(
        (response: any) => {
          console.log(response.user);
          localStorage.setItem('user', JSON.stringify(response.user));
          alert('Đăng nhập thành công');
        },
        ({ error }) => {
          alert(error);
        }
      );
    }
  }
}
