import { Component } from '@angular/core';
import { IUser } from '../../interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dasdboard',
  standalone: true,
  imports: [],
  templateUrl: './dasdboard.component.html',
  styleUrl: './dasdboard.component.css',
})
export class DasdboardComponent {
  users!: IUser[];
  constructor(private AuthService: AuthService) {
    this.AuthService.getAll().subscribe((users) => (this.users = users));
  }
  handleDelete(id: number) {
    if (confirm('Bạn chắc chắn xoá không?')) {
      this.AuthService.delete(id).subscribe(() => {
        this.users = this.users.filter((user) => user.id != id);
        alert('Xoá thành công');
      });
    }
  }
}
