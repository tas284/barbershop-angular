import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PersonComponent,
    PersonFormComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
