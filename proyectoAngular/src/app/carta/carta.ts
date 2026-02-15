import { Component } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Pizza } from '../interfaces/pizza';

@Component({
  selector: 'app-carta',
  imports: [CommonModule],
  templateUrl: './carta.html',
  styleUrl: './carta.css',
})
export class Carta {
  pizzasVisibles: Pizza[] = [];

  constructor(private pizzaService: PizzaService){}

  ngOnInit(){
    const todas = this.pizzaService.getPizzas();

    this.pizzasVisibles = todas.filter(p => p.visibilidad === true);
  }
}
