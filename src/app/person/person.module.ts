import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatTableModule
  ]
})
export class PersonModule { }
