import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrumDetailComponent} from './scrum-detail/scrum-detail.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { RegistroComponent } from './registro/registro.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/Ejercicio2', pathMatch: 'full' },
  { path: 'Ejercicio1', component: ScrumDetailComponent },
  { path: 'Ejercicio2', component: ComboBoxComponent },
  { path: 'Ejercicio3', component: RegistroComponent },
  { path: 'Ejercicio4', component: ClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
