import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BuscarCepFormComponent } from './buscar-cep-form/buscar-cep-form.component';
import { CrudFirebaseComponent } from './crud-firebase/crud-firebase.component';
  

@NgModule({
  declarations: [
    BuscarCepComponent,
    ProjetosComponent,
    BuscarCepFormComponent,
    CrudFirebaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ]
})
export class ProjetosModule { }
