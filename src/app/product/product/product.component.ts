import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> | null = null;
  displayedColumns = [ 'name', 'price', 'quantity', 'brand', 'status', 'createdAt', 'updatedAt', 'actions' ];

  constructor(
    private service: ProductService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.load();
  }

  ngOnInit(): void { }

  load(): void {
    this.products$ = this.service.list()
      .pipe(
        catchError(err => {
          this.onMessage('Erro ao carregar a lista de clientes!', 10000);
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
          this.onMessage('Produto removido com sucesso!')
        },
        error => {
          this.onMessage(`Erro ao cadastrar Produto: ${error.error}`, 10000)
        }
      );
  }

  onMessage(message: string, duration = 5000){
    this.snackBar.open(message, '', { duration: duration})
  }
}
