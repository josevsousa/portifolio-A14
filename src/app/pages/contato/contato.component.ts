import { Component } from '@angular/core';

import {  Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
 
  nome: string = "jose vicente";

}
