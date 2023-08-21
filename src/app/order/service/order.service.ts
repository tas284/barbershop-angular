import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, take } from 'rxjs';

import { environment } from '../../../environment/environment';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly URI: string = `${environment.API}/order`;

  constructor(private http: HttpClient) { }

  list(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.URI}`)
      .pipe(
        first()
      );
  }

  search(value: string): Observable<Order[]>{
    if(value == null || value == '' || value == undefined) {
      return this.list();
    }
    return this.http.get<Order[]>(`${this.URI}/customer/${value}`);
  }

  save(order: Order){
    return this.http.post<Order>(`${this.URI}`, order)
      .pipe(
        first()
      );
  }

  update(order: Order, id: string){
    return this.http.put<Order>(`${this.URI}/${id}`, order)
      .pipe(
        first()
      );
  }

  get(id: string){
    return this.http.get<Order>(`${this.URI}/${id}`)
      .pipe(
        first()
      );
  }

  delete(id: string){
    return this.http.delete(`${this.URI}/${id}`, { responseType: 'text' })
      .pipe(
        take(1)
      );
  }
}
