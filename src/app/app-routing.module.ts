import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { BuscarCepComponent } from './pages/projetos/buscar-cep/buscar-cep.component';
import { BuscarCepFormComponent } from './pages/projetos/buscar-cep-form/buscar-cep-form.component';
import { ProjetosComponent } from './pages/projetos/projetos/projetos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CrudFirebaseInicioComponent } from './modules/crud-firebase/crud-firebase-inicio/crud-firebase-inicio.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'sobre', component: SobreComponent },
  {path: 'projetos', component: ProjetosComponent },
  {path: 'contatos', component: ContatoComponent },
  {path: 'buscar-cep', component: BuscarCepComponent },
  {path: 'buscar-cep-form', component: BuscarCepFormComponent },
  {path: 'crud-firebase', component: CrudFirebaseInicioComponent},
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '**', component: InicioComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
