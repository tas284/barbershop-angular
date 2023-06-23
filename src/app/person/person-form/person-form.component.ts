import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  form!: FormGroup;

  constructor(
    private service: PersonService,
    private snackBar: MatSnackBar,
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {

    const person = this.route.snapshot.data['person'];

    this.form = this.formBuilder.group({
      id: [person.id],
      firstName: [person.firstName, Validators.required],
      lastName: [person.lastName],
      phone: [person.phone],
      type: [person.type]
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
