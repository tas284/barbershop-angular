import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Person } from '../model/person';
import { PersonService } from '../service/person.service';
import { PublicService } from 'src/app/shared/services/public.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{

  people$: Observable<Person[]> | null = null;
  version?: string;
  appEnvironment?: string;
  displayedColumns = [ 'firstName', 'phone', 'typePerson', 'actions' ];

  constructor(
    private service: PersonService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private publicService: PublicService
  ){
    this.load();
  }

  ngOnInit(): void { }

  load(): void {
    this.people$ = this.service.list()
      .pipe(
        catchError(err => {
          this.onMessage('Erro ao carregar a lista de pessoas!', 10000);
          return of([]);
        })
      );

      this.publicService.version()
        .subscribe(
          data => this.version = data
        )

      this.appEnvironment = this.publicService.getEnvironment();
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
          this.onMessage('Cadastro removido com sucesso!')
        },
        error => {
          this.onMessage(`Erro ao remover este cadastro.`, 10000)
        }
      );
  }

  onMessage(message: string, duration = 5000){
    this.snackBar.open(message, '', { duration: duration})
  }
}
