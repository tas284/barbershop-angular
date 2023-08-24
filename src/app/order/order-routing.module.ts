import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderResolverGuard } from '../guard/order/order-resolver.guard';

const routes: Routes = [
  { path: '', component: OrderComponent },
  { path: 'new', component: OrderFormComponent, resolve: { order: OrderResolverGuard} },
  { path: 'edit/:id', component: OrderFormComponent, resolve: { order: OrderResolverGuard} },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
