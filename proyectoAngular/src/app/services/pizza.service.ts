import { Injectable } from '@angular/core';
import { Pizza } from '../interfaces/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  storage_key = 'pizzas_jordi';

  constructor() {}

  getPizzas(): Pizza[] {
    const data = localStorage.getItem(this.storage_key);
    return data ? JSON.parse(data) : [];
  }

  guardarPizzas(pizzas: Pizza[]): void {
    localStorage.setItem(this.storage_key, JSON.stringify(pizzas));
  }

  addPizza(nuevaPizza: Pizza): void {
    const pizzas = this.getPizzas();
    pizzas.push(nuevaPizza);
    this.guardarPizzas(pizzas);
  }

  deletePizza(id: number): void {
    let pizzas = this.getPizzas();
    pizzas = pizzas.filter((p) => p.id !== id);
    this.guardarPizzas(pizzas);
  }

  updatePizza(updatedPizza: Pizza): void {
    let pizzas = this.getPizzas();
    const index = pizzas.findIndex((p) => p.id === updatedPizza.id);
    if (index !== -1) {
      pizzas[index] = updatedPizza;
      this.guardarPizzas(pizzas);
    }
  }
}
