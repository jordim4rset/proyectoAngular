import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = "";
  password = "";

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(){
    let datosUsuario;

    if(this.username === 'jordi' && this.password === '12345678'){
      datosUsuario = {
        username: 'jordi',
        role: 'chef',
        email: 'jordimarset@gmail.com'
      };

      this.authService.login(datosUsuario);
      this.router.navigate(['menu']);
    }

    setTimeout(() => window.location.reload(), 100);
  }

}
