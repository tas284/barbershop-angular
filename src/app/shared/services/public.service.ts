import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private readonly URI: string = `${environment.API}/public`;

  constructor(private http: HttpClient) { }

  version(): Observable<any> {
    return this.http.get(`${this.URI}/version`)
      .pipe(
        first()
      )
  }

  getEnvironment(): string {
    return environment.production ? "Production" : "Development";
  }
}
