import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css',
})
export class LayoutAdminComponent {}
