import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css',
})
export class LayoutClientComponent {
  user!: Observable<IUser | null>;
  constructor(private AuthService: AuthService) {}
  ngOnInit(): void {
    this.user = this.AuthService.user;
  }
}
