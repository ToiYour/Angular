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

  formLogin = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  onSubmit = () => {
    if (this.formLogin.invalid) {
      alert('Vui lòng điền đầy đủ thông tin các trường!');
    } else {
      this.authService.login(this.formLogin.value).subscribe(
        (data: any) => {
          alert('Đăng nhập thành công');
          localStorage.setItem('user', JSON.stringify(data.user));
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);

          alert(err.error);
        }
      );
    }
  };
}
