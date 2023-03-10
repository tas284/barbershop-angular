import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  displayedColumns = [ 'id', 'firstName', 'lastName', 'phone', 'typePerson', 'actions' ];

  constructor(
    private service: PersonService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.people$ = this.service.list()
      .pipe(
        catchError(err => {
          this.onError('Erro ao carregar a lista de clientes!');
          return of([]);
        })
      );
  }

  ngOnInit(): void {

  }

  onError(msgError: string){
    this.dialog.open(ErrorDialogComponent, {
      data: msgError
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }


}
