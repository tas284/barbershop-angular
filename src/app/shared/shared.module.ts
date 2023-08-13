import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PersonPipe } from './pipes/person.pipe';
import { ProductPipe } from './pipes/product.pipe';
import { DatepickerComponent } from './components/datepicker/datepicker/datepicker.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    PersonPipe,
    ProductPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    DatepickerComponent
  ],
  exports: [
    ErrorDialogComponent,
    DatepickerComponent,
    PersonPipe,
    ProductPipe
  ]
})
export class SharedModule { }
