import { Component } from '@angular/core';

import { Person } from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  people: Person[] = [ { id: '1', firstName: 'Tiago', lastName: 'Saldanha', phone: '51 9501-0615' } ];
  displayedColumns = [ 'id', 'firstName', 'lastName', 'phone' ];

}
