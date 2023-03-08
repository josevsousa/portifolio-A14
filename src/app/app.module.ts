import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjetosModule } from './pages/projetos/projetos.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
import { AngularFireModule } from '@angular/fire/compat'


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

/// import { environment } from './environments/environment';



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
    AngularFireModule.initializeApp(
      {
        apiKey: 'AIzaSyDcgQBvEEJITnpJ5-CLuzuU7TQxfn7gaZM',
        authDomain: 'josevicentedesousa-e1ef1.firebaseapp.com',
        databaseURL: 'https://josevicentedesousa-e1ef1.firebaseio.com',
        projectId: 'josevicentedesousa-e1ef1',
        storageBucket: 'josevicentedesousa-e1ef1.appspot.com',
        messagingSenderId: '1016124463338',
        appId: '1:1016124463338:web:d29ef73a850597c7a6df93'
      }
    ),
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
