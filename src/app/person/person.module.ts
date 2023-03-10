import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PersonModule { }
