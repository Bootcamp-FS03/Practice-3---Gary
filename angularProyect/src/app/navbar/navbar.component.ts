import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../auth/Models/User';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user : User  | null = null;

  constructor(private authService : AuthService){
    this.user = this.authService.getCurrentUser();
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.authService.getCurrentUser();
    //refresh the page
    window.location.reload();
  }
}
