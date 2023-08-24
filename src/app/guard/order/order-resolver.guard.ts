import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from 'src/app/order/model/order';
import { OrderService } from 'src/app/order/service/order.service';

@Injectable({
  providedIn: 'root'
})
export class OrderResolverGuard implements Resolve<Order> {

  constructor (private service: OrderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> {

    if(route.params && route.params['id']) {
      return this.service.get(route.params['id'])
    }

    return of({
      id: '',
      code: 0,
      customer: {
        id: '',
        name: '',
        phone: ''
      },
      products: null,
      status: '',
      total: 0,
      discount: 0,
      createdAt: new Date,
      updatedAt: new Date
    })
  }

}
