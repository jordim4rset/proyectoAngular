import { Component, OnInit } from '@angular/core';
import { Pizza } from '../interfaces/pizza';
import { PizzaService } from '../services/pizza.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gestion.html',
  styleUrl: './gestion.css',
})
export class Gestion implements OnInit {
  pizzaVacia: Pizza = {
    id: 0,
    nombre: '',
    desc: '',
    precio: 0,
    categoria: 'pizza',
    imagen: '',
    visibilidad: true,
  };

  newPizza: Pizza = { ...this.pizzaVacia };
  listaPizzas: Pizza[] = [];
  isEdit: boolean = false;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit() {
    this.cargarPizzas();
  }

  cargarPizzas() {
    this.listaPizzas = this.pizzaService.getPizzas();
  }

  prepareEdit(pizza: Pizza) {
    this.newPizza = { ...pizza };
    this.isEdit = true;
    window.scrollTo(0, 0);
  }

  addPizza() {
    if (this.isEdit) {
      this.pizzaService.updatePizza(this.newPizza);
      this.isEdit = false;
    } else {
      this.newPizza.id = Date.now();
      this.pizzaService.addPizza({ ...this.newPizza });
    }
    this.limpiarFormulario();
    this.cargarPizzas();
  }

  cancelarEdicion() {
    this.isEdit = false;
    this.limpiarFormulario();
  }

  deletePizza(id: number) {
    if (confirm('¿Seguro que quieres eliminar esta pizza?')) {
      this.pizzaService.deletePizza(id);
      this.cargarPizzas();
    }
  }

  cambiarVisibilidad(pizza: Pizza) {
    pizza.visibilidad = !pizza.visibilidad;
    this.pizzaService.guardarPizzas(this.listaPizzas);
  }

  limpiarFormulario() {
    this.newPizza = { ...this.pizzaVacia };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      this.newPizza.imagen = reader.result as string;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}
