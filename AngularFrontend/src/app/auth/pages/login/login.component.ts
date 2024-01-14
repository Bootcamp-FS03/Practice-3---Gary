import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginUser } from '../../Models/LoginUser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  loginUser : LoginUser = {
    email: '',
    password: ''
  };

  constructor(private service : AuthService, private router : Router) { }

  login(){
    this.service.login(this.loginUser).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        console.log(localStorage.getItem('currentUser'));
        setTimeout(() => {
          this.router.navigate(['/home']);
          
        }, 1000);
      },
      err => {
        console.log(err);
      }
    );
  }
}
