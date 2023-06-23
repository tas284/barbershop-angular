import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, take } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly URI: string = `${environment.API}/product`;

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.URI}/all`)
      .pipe(
        first(),
        //delay(500)
      );
  }

  save(product: Product){
    return this.http.post<Product>(`${this.URI}`, product)
      .pipe(
        first(),
        delay(500)
      );
  }

  get(id: string){
    return this.http.get<Product>(`${this.URI}/${id}`)
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
