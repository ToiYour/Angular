import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

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
  formAuth = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  onSubmit() {
    if (this.formAuth.invalid) {
      alert('Vui lòng thêm đầy đủ các trường!');
    } else {
      this.authService.register(this.formAuth.value).subscribe(
        (response) => {
          alert('Đăng ký thành công');
          this.router.navigate(['/login']);
        },
        ({ error }) => {
          alert(error);
        }
      );
    }
  }
}
