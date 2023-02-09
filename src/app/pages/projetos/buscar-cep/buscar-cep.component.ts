import { Component } from '@angular/core';

import { iBusca } from 'src/app/models/Busca';

import { BuscaCepService } from 'src/app/services/busca-cep.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css'],
})
export class BuscarCepComponent {

  inputCep: string = '';
  msgErro: string = "Error";
  validando: boolean = true;
  valido: boolean = false;
  loading: boolean = true;
  cepEncontrado: iBusca; 

  constructor( private buscaCepService: BuscaCepService){
    this.cepEncontrado = {
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      localidade: "",
      uf: "",
      unidade: "",
      ibge: "",
      gia: ""
    }
  }

  ngKeyup(){
    this.validando = true;
    
    this.loading = false;
    if(this.inputCep.length == 8){
      this.validar(); 

    }else if(this.inputCep.length == 0){
      this.loading = true;
    }

  } 

  validar(){
    let dataObj: any = {erro: false};
    //valida se tudo e numero
    this.buscaCepService.getCep(String(this.inputCep))
      .subscribe((data)=>{

        dataObj = data;

        if (!dataObj.erro) {
              this.validando = true;
              this.valido = true; 
              this.cepEncontrado = dataObj;
        }else {
              this.validando = false;
              this.msgErro = "cep errado";
        }
        
        this.loading = true;
      });
  }
  
}
