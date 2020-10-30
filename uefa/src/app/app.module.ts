import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ScrumDetailComponent} from './scrum-detail/scrum-detail.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { RegistroComponent } from './registro/registro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
declarations: [
AppComponent,
ScrumDetailComponent,
ComboBoxComponent,
RegistroComponent,
ClienteComponent
],
imports: [
BrowserModule,
FormsModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
