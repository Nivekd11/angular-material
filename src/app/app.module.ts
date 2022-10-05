import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { TerrorComponent } from './components/peliculas/terror/terror.component';
import { AccionComponent } from './components/peliculas/accion/accion.component';
import { AnimacionComponent } from './components/peliculas/animacion/animacion.component';
import { MainComponent } from './components/peliculas/main/main.component';
import { PeliculasModule } from './components/peliculas/peliculas.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    PeliculasModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
