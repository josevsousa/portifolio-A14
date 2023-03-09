import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {

  empForm: FormGroup;

  education: String[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduad',
    'Pos Graduad'
  ]

  constructor(private _fb: FormBuilder){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }

  ngSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
    }
  }

}
