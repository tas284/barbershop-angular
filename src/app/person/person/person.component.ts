import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  displayedColumns = [ 'firstName', 'phone', 'typePerson', 'actions' ];

  constructor(
    private service: PersonService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.load();
  }

  ngOnInit(): void { }

  load(): void {
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onDelete(id: string){
    this.service.delete(id)
      .subscribe(
        value => {
          this.load()
          this.snackBar.open('Cliente removido com sucesso!')
        },
        error => {
          this.onError(`Erro ao cadastrar Cliente/Barbeiro!`)
        }
      );
  }
}
