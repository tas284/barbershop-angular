import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly URI: string = `${environment.API}/person`;
  constructor() { }
}
