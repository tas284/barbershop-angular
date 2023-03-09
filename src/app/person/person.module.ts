import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    AngularMaterialModule
  ]
})
export class PersonModule { }
