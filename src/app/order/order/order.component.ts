import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Observable, catchError, of } from 'rxjs';
import { OrderService } from '../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  labelOrderSearch: string = "Pesquisa de Vendas";
  order$: Observable<Order[]> | null = null;
  displayedColumns = [ 'code', 'customerName', 'status', 'createdAt', 'total', 'actions' ];

  constructor(
    private service: OrderService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.load();
  }

  ngOnInit(): void { }

  load(): void {
    this.order$ = this.service.list()
      .pipe(
        catchError(err => {
          this.onMessage('Erro ao carregar a lista de vendas!', 10000);
          return of([]);
        })
      );

    this.service.list()
      .subscribe(
        data => console.log(data)
      )
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onDelete(id: string){
    this.service.delete(id)
      .subscribe(
        value => {
          this.load()
          this.onMessage('Venda removida com sucesso!')
        },
        error => {
          this.onMessage(`Erro ao remover esta venda.`, 10000)
        }
      );
  }

  onMessage(message: string, duration = 5000){
    this.snackBar.open(message, '', { duration: duration})
  }

  searchOrder(value: string) {
    this.order$ = this.service.search(value)
  }
}
