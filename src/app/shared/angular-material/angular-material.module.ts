import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
  ]
})
export class AngularMaterialModule { }
