import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, take } from 'rxjs';

import { environment } from '../../../environment/environment.prod';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly URI: string = `${environment.API}/person`;

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.URI}/all`)
      .pipe(
        first(),
        //delay(500)
      );
  }

  save(person: Person){
    return this.http.post<Person>(`${this.URI}`, person)
      .pipe(
        first(),
        delay(500)
      );
  }

  get(id: string){
    return this.http.get<Person>(`${this.URI}/${id}`)
      .pipe(
        first()
      );
  }

  delete(id: string){
    return this.http.delete(`${this.URI}/${id}`, { responseType: 'text' })
      .pipe(
        take(1),
        delay(500)
      );
  }
}
