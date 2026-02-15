import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Gestion } from './gestion/gestion';
import { Carta } from './carta/carta';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Página de Inicio'},
  { path: 'gestion', component: Gestion, title: 'Gestión Pizzas'},
  { path: 'menu', component: Carta, title: 'Menú'},
  { path: 'login', component: Login, title: 'Login'},
];

