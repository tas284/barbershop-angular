import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  form: FormGroup;

  constructor(
    private service: PersonService,
    private snackBar: MatSnackBar,
    private location: Location,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        value => {
          this.snackBar.open('Cliente cadastrado com sucesso!')
          this.onCancel()
        },
        error => {
          this.onError(`Erro ao cadastrar Cliente/Barbeiro!`)
          this.onCancel()
        }
      )
  }

  onCancel(){
    this.location.back();
  }

  onError(msgError: string){
    this.snackBar.open(msgError, '', { duration: 5 })
  }

}
