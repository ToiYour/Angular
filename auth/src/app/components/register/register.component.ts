import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private AuthService: AuthService, private router: Router) {}
  // validate confirm Password
  comparePassword: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password?.value != confirmPassword?.value
    ) {
      return {
        passwordmatcherror: true,
      };
    }
    return null;
  };
  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      },
      { validators: this.comparePassword }
    );
  }
  onSubmit() {
    if (!this.registerForm.invalid) {
      const { confirmPassword, ...rest } = this.registerForm.value;

      this.AuthService.register(rest).subscribe(
        (data) => {
          alert('Đăng ký thành công');
          this.router.navigate(['/login']);
        },
        (err) => {
          alert(err.error);
        }
      );
    } else {
      alert('Vui lòng điền đầy đủ các trường');
    }
  }
}
