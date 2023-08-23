import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent } from './person/person.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonResolverGuard } from '../guard/person/person-resolver.guard';

const routes: Routes = [
  { path: '', component: PersonComponent },
  { path: 'new', component: PersonFormComponent, resolve: { person: PersonResolverGuard } },
  { path: 'edit/:id', component: PersonFormComponent, resolve: { person: PersonResolverGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
