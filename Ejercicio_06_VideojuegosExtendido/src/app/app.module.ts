import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginErrorComponent } from './login-error/login-error.component';
import { VideojuegosEspecificosComponent } from './videojuegos-especificos/videojuegos-especificos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactameComponent } from './contactame/contactame.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BienvenidaComponent,
    LoginComponent,
    LoginErrorComponent,
    VideojuegosEspecificosComponent,
    SobreMiComponent,
    ContactameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
