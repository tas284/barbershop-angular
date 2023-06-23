import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  // { path: 'new', component: PersonFormComponent, resolve: { person: PersonResolverGuard } },
  // { path: 'edit/:id', component: PersonFormComponent, resolve: { person: PersonResolverGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
