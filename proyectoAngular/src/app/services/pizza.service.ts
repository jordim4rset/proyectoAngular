import { Injectable } from '@angular/core';
import { Pizza } from '../interfaces/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

  storage_key = 'pizzas_jordi';

  constructor(){}

  getPizzas(): Pizza[]{
    const data = localStorage.getItem(this.storage_key);
    return data ? JSON.parse(data) : [];
  }

  addPizza(nuevaPizza: Pizza): void{
    const pizzas = this.getPizzas();
    pizzas.push(nuevaPizza);

    localStorage.setItem(this.storage_key, JSON.stringify(pizzas));
  }

  deletePizza(id: number):void {
    let pizzas = this.getPizzas();
    pizzas = pizzas.filter(p => p.id !== id);
    localStorage.setItem(this.storage_key, JSON.stringify(pizzas));
  }

}
