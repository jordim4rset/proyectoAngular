import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pizza } from '../interfaces/pizza';
import { PizzaService } from '../services/pizza.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  imports: [RouterLink, FormsModule, CommonModule],
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
  ngOnInit() {
    this.cargarPizzas();
  }

  cargarPizzas(){
    this.listaPizzas = this.pizzaService.getPizzas();
  }

  addPizza(){
    this.newPizza.id = Date.now();
    this.pizzaService.addPizza({...this.newPizza});
    this.newPizza = {id:0 , nombre: "", desc: "", precio: 0, imagen: ""}
    this.cargarPizzas();
  }

  deletePizza(id: number){
    this.pizzaService.deletePizza(id);
    this.cargarPizzas();
  }

  changeImage(fileInput: HTMLInputElement){
    if(!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      this.newPizza.imagen = reader.result as string;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}
