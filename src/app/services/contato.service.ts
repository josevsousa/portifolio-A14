import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
// import { iContato } from '../models/form-contato';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  // contato: AngularFirestoreCollection<iContato>|undefined;

  constructor(
    // private db: AngularFirestore,
    private httpClient: HttpClient    
  ) { this.setContatos(); }

  private setContatos(): void{
    // this.contato = this.db.collection<iContato>('/contatos');
  }

    // forma mais inchuta apenas para inserir dados sem a necessidade de observar 
    addContato2(form: any){
      
        console.log(form);  
      

      // new id
      // const uid = this.db.createId();
  
      // // registro no firestore
      //  const contatoRef: AngularFirestoreDocument<iContato> = this.db.doc(`contatos/${uid}`);
  
      // //contato
      // const contato_data = {
      //   uid,
      //   email:form.value.email,
      //   nome: form.value.nome,
      //   message: form.value.messagem
      // }
  
      // return contatoRef.set(contato_data);
      return false
      
  
    }
}
