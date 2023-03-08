import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjetosModule } from './pages/projetos/projetos.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
 


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    UserProfileComponent,
    ContatoComponent,
    CursosComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProjetosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
   // provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
