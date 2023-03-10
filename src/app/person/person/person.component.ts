import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{

  // people: Person[] = [ { id: '1', firstName: 'Tiago', lastName: 'Saldanha', phone: '51 9501-0615' } ];
  people$!: Observable<Person[]>;
  displayedColumns = [ 'id', 'firstName', 'lastName', 'phone' ];

  constructor(private service: PersonService){
    this.people$ = this.service.list();
  }

  ngOnInit(): void {

  }
}
