import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/angular-material/app-material.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    AppMaterialModule
  ]
})
export class PersonModule { }
