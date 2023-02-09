import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { BuscarCepComponent } from './pages/projetos/buscar-cep/buscar-cep.component';
import { ProjetosComponent } from './pages/projetos/projetos/projetos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'sobre', component: SobreComponent },
  {path: 'projetos', component: ProjetosComponent },
  {path: 'contatos', component: ContatoComponent },
  {path: 'buscar-cep', component: BuscarCepComponent },
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '**', component: InicioComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
