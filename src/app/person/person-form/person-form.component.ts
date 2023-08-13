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
    this.onSave()
  }

  onCancel(){
    this.location.back();
  }

  onMessage(message: string, duration = 5000){
    this.snackBar.open(message, '', { duration: duration })
  }

  isNew() {
    const id = this.route.snapshot.params["id"];
    return id === undefined ? true : false;
  }

  onSave() {
    if(this.isNew()){
      this.service.save(this.form.value)
      .subscribe(
        value => {
          this.onMessage('Pessoa cadastrada com sucesso!')
          this.onCancel()
        },
        error => {
          this.onMessage(`Erro ao cadastrar Pessoa: ${error.error}`, 10000)
        }
      )
    } else {
      const id = this.route.snapshot.params["id"];
      this.service.update(this.form.value, id)
        .subscribe(
          value => {
            this.onMessage('Pessoa atualizada com sucesso!')
            this.onCancel()
          },
          error => {
            this.onMessage(`Erro ao atualizar Pessoa: ${error.error}`, 10000)
          }
      )
    }
  }
}
