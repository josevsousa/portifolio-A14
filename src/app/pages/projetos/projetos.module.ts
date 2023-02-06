import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    BuscarCepComponent,
    ProjetosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjetosModule { }
