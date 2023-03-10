import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      phone: [''],
      type: ['']
    });
  }

}
