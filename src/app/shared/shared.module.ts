import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PersonPipe } from './pipes/person.pipe';
import { ProductPipe } from './pipes/product.pipe';
import { DatepickerComponent } from './components/datepicker/datepicker/datepicker.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    SearchComponent,
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
    SearchComponent,
    PersonPipe,
    ProductPipe
  ]
})
export class SharedModule { }
