import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import { MainComponent } from './main/main.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChangeColorDirective } from '../libs/directives/change-color.directive';
import { TerrorComponent } from './terror/terror.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { AccionComponent } from './accion/accion.component';
@NgModule({
  declarations: [
    MainComponent,
    ModalComponent,
    ChangeColorDirective,
    TerrorComponent,
    AnimacionComponent,
    AccionComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    
  ],
  exports:[
    MainComponent,
    TerrorComponent,
    AnimacionComponent,
    AccionComponent
  ]
})
export class PeliculasModule { }
