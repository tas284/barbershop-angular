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
  displayedColumns = [ 'name', 'price', 'quantity', 'brand', 'status', 'createdAt', 'updatedAt' ];

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
        // value => console.log(value),
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
          this.snackBar.open('Produto removido com sucesso!')
        },
        error => {
          this.onError(`Erro ao cadastrar Produto!`)
        }
      );
  }
}
