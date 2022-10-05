import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionComponent } from '../peliculas/accion/accion.component';
import { AnimacionComponent } from '../peliculas/animacion/animacion.component';
import { MainComponent } from '../peliculas/main/main.component';
import { TerrorComponent } from '../peliculas/terror/terror.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  
    {
        path: '',
        children:[

          {
              path: 'main',
              component: MainComponent
          },
          {
            path:'terror',
            component: TerrorComponent
          },
          {
            path: 'accion',
            component: AccionComponent
          },
          {
            path: 'animacion',
            component: AnimacionComponent
          },
          {
            path: '**',
            redirectTo: 'main'
          }
        ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SharedRoutingModule { }