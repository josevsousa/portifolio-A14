import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';
import { iBusca } from 'src/app/models/Busca';
import { BuscaCepService } from 'src/app/services/busca-cep.service';

@Component({
  selector: 'app-buscar-cep-form',
  templateUrl: './buscar-cep-form.component.html',
  styleUrls: ['./buscar-cep-form.component.css']
})
export class BuscarCepFormComponent {
  public nome: string = "jose";

  formularioCep: FormGroup;
  enviado: boolean = false;
  cepErrado: boolean = false;

  dataCep: iBusca;
  statusCep: Boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private buscaCepFrom: BuscaCepService
  ){
    this.formularioCep = formBuilder.group({
      cep: [null, [Validators.required, Validators.minLength(3)] ]
    });

    this.dataCep  = {
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


  ngSubmit(){
    this.buscaCepFrom.getCep(this.formularioCep.value.cep)
      .subscribe( (resp) => {
          if(!resp.erro){
            this.cepErrado = false;
            this.dataCep = resp;
            this.statusCep = true;
          }else{
            this.cepErrado = true;
            this.statusCep = false;
          }
        }
        // error: (err) =>  this.cepErrado = true,
        // complete: () => console.log("finalizado")
    )
  
  }
}
