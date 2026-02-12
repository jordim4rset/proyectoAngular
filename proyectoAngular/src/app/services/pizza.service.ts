import { Injectable } from '@angular/core';

export interface Pizza {
  id: number;
  nombre: string;
  desc: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})
export class PizzaService {

}
