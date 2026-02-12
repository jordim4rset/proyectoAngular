import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Página de Inicio'},
  { path: 'gestion', component: Gestion, title: 'Gestión Pizzas'},
];

