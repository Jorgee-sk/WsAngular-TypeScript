import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { VideojuegosEspecificosComponent } from './videojuegos-especificos/videojuegos-especificos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactameComponent } from './contactame/contactame.component';

const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos de base
    component : LoginComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'loginError/:errorUser/:errorPass',
    component : LoginErrorComponent
  },
  {
    path : 'bienvenida/:username', 
    component : BienvenidaComponent
  },
  {
    path : 'bienvenida', 
    component : BienvenidaComponent
  },
  {
    path : 'listaVideojuegos/:id/:titulo/:company/:vMedia', 
    component : VideojuegosEspecificosComponent
  },
  {
    path : 'sobreMi', 
    component : SobreMiComponent
  },
  {
    path : 'contacto',
    component : ContactameComponent
  }/*
  {path : 'bienvenida', component : BienvenidaComponent},
  {path : 'componente1/:nombre/:universo', component : Componente1Component},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
