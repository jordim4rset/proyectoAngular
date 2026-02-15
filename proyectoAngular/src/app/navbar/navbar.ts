import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  isChef: boolean = false;

  constructor(public authService: AuthService, private router: Router){};

  ngOnInit(): void {
    this.actualizarEstado();
  }

  actualizarEstado(): void {
    this.isChef = this.authService.isChef();
  }

  salir():void {
    this.authService.logout();
    this.isChef = false;

    this.router.navigate(['home']).then(()=> {
      window.location.reload();
    })
  }


}
