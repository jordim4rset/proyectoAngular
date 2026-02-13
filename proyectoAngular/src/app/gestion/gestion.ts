import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pizza } from '../interfaces/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-gestion',
  imports: [RouterLink],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion implements OnInit {

  newPizza: Pizza = {
    id: 0,
    nombre: "",
    desc: "",
    precio: 0,
    imagen: ""
  };

  listaPizzas: Pizza[] = [];


  constructor(private pizzaService: PizzaService){}

  addPizza(){
    this.newPizza.id = Date.now();
    this.pizzaService.addPizza({...this.newPizza});
    this.newPizza = {id:0 , nombre: "", desc: "", precio: 0, imagen: ""}
  }
}
