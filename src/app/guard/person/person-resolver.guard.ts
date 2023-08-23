import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from '../../person/model/person';
import { PersonService } from '../../person/service/person.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolverGuard implements Resolve<Person> {

  constructor(private service: PersonService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> {

    if(route.params && route.params['id']){
      return this.service.get(route.params['id']);
    }

    return of({
      id: '',
      firstName: '',
      lastName: '',
      phone: '',
      type: ''
    })
  }
}
