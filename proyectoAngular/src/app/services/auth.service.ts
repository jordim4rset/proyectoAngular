import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly user_key = 'usuario_pizzeria';

  login(user: any){
    localStorage.setItem(this.user_key, JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem(this.user_key);
  }

  getUsuarioActual(){
    const data = localStorage.getItem(this.user_key);
    return data ? JSON.parse(data) : null;
  }

  isChef(): boolean{
    const user = this.getUsuarioActual();
    return user && user.username === 'jordi' && user.role === 'chef';
  }
}
