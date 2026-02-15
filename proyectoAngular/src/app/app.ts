import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoAngular');

  toggleAccesibilidad(clase: string) {
    console.log('Cambiando modo:', clase);
    const body = document.body;

    switch (clase) {
      case 'fuente':
        body.classList.toggle('acc-fuente-grande');
        break;
      case 'oscuro':
        body.classList.toggle('acc-modo-oscuro');
        break;
      case 'grises':
        body.classList.toggle('acc-escala-grises');
        break;
      case 'enlaces':
        body.classList.toggle('acc-remarcar-enlaces');
        break;
    }
  }

  resetAccesibilidad() {
    console.log('Restableciendo accesibilidad');
    const clases = ['acc-fuente-grande', 'acc-modo-oscuro', 'acc-escala-grises', 'acc-remarcar-enlaces'];
    document.body.classList.remove(...clases);
  }
}
