import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-crud-firebase-inicio',
  templateUrl: './crud-firebase-inicio.component.html',
  styleUrls: ['./crud-firebase-inicio.component.css']
})
export class CrudFirebaseInicioComponent {

  constructor(
    private _dialog: MatDialog ){}

    //abrir um component dentro da caixa de dialogo
    openEmpAddEdit(){
      this._dialog.open(EmpAddEditComponent)
    }

}
