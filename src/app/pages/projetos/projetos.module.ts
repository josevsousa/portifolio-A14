import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { FormsModule } from '@angular/forms';


import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
  

@NgModule({
  declarations: [
    BuscarCepComponent,
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ]
})
export class ProjetosModule { }
