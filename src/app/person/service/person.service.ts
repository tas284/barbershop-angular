import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

import { environment } from '../../../environment/environment.prod';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly URI: string = `${environment.API}/person`;

  constructor(private http: HttpClient) { }

  list(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.URI}/all`).pipe(delay(5000));
  }
}
