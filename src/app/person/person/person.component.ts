import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of, pipe } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Person } from '../model/person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{

  people$: Observable<Person[]> | null = null;
  displayedColumns = [ 'id', 'firstName', 'lastName', 'phone' ];

  constructor(
    private service: PersonService,
    private dialog: MatDialog
  ){
    this.people$ = this.service.list()
      .pipe(
        catchError(err => {
          this.onError('Erro ao carregar a lista de clientes!');
          return of([]);
        })
      );
  }

  onError(msgError: string){
    this.dialog.open(ErrorDialogComponent, {
      data: msgError
    });
  }

  ngOnInit(): void {

  }
}
