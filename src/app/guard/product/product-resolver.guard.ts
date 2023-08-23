import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../../product/model/product';
import { ProductService } from '../../product/service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverGuard implements Resolve<Product> {

  constructor(private service: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {

    if(route.params && route.params['id']){
      return this.service.get(route.params['id']);
    }

    return of({
      id: '',
      name: '',
      price: 0,
      quantity: 0,
      brand: '',
      status: true,
      createdAt: null,
      updatedAt: null
    })
  }
}
