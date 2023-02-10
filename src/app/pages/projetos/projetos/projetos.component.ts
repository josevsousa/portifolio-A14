import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  constructor(private router: Router){}

  buscarCep(){
    this.router.navigateByUrl("/buscar-cep")
  }

  buscarCepForm(){
    this.router.navigateByUrl("/buscar-cep-form");
  }
}
