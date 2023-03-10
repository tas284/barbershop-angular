import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PersonPipe } from './pipes/person.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    PersonPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    PersonPipe
  ]
})
export class SharedModule { }
