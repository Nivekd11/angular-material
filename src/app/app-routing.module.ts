import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'peliculas',
    loadChildren: ()=> import('./components/shared/shared.module').then(m=>m.SharedModule)
    
  },
  {
     path:'**',
     redirectTo: 'peliculas' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
