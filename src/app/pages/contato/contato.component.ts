import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent{
  
  formulario: FormGroup; 
  enviado: boolean = false;

  constructor(private formBuilder: FormBuilder, private contatoService: ContatoService){
    this.formulario = formBuilder.group({
         email: [null, [Validators.required, Validators.email]],
         nome: [null, Validators.required],
     messagem: [null, Validators.required]
    });
  }

  ngSubmit(){

    if(this.contatoService.addContato2(this.formulario)) {
      console.log('ok')      
    }else {
      console.log('error')
    }

      
  
     
    // .then(()=> {
     //  this.enviado = !this.enviado;
    // })
    // .catch((erro)=>{
    //   console.log("Erro: " + erro);}); //enviando o formContato para o service contato
  }

  verificaValorTouchedValid(campo: any){
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
  }


}
