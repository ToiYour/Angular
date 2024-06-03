import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private AuthService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onSubmit() {
    if (!this.loginForm.invalid) {
      this.AuthService.login(this.loginForm.value).subscribe((data) => {
        if (data?.length! <= 0) {
          alert('Tài khoản không tồn tại');
        }
        if (data?.[0].password != this.loginForm.value.password) {
          alert('Mật khẩu không đúng');
        } else {
          alert('Đăng nhập thành công');
          this.router.navigate(['/admin']);
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ các trường');
    }
  }
}
