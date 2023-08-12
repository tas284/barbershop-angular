import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  form!: FormGroup;

  constructor(
    private service: ProductService,
    private snackBar: MatSnackBar,
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    const product = this.route.snapshot.data['product'];
    this.form = this.formBuilder.group({
      id: [product.id],
      name: [product.name, Validators.required],
      price: [product.price],
      quantity: [product.quantity],
      brand: [product.brand],
      status: [this.isActiveToString(product.status)],
      createdAt: [product.createdAt],
      updatedAt: [product.createdAt]
    });
  }

  onSubmit() {
    this.onSave();
  }

  onCancel(){
    this.location.back();
  }

  onError(msgError: string){
    this.snackBar.open(msgError, '', { duration: 5 })
  }

  isNew(): boolean{
   const id = this.route.snapshot.params["id"];
   return id === undefined ? true : false;
  }

  isActiveToBoolean(){
    this.form.value.status = JSON.parse(this.form.value.status);
  }

  isActiveToString(status: boolean){
    return status ? "true" : "false";
  }

  onSave() {
    this.isActiveToBoolean();
    if(this.isNew()){
      this.service.save(this.form.value)
        .subscribe(
          value => {
            this.snackBar.open('Produto cadastrado com sucesso!')
            this.onCancel()
          },
          error => {
            this.onError(`Erro ao cadastrar Produto!`)
            this.onCancel()
          }
        )
    } else{
      this.service.update(this.form.value, this.form.value.id)
        .subscribe(
          value => {
            this.snackBar.open('Produto atualizado com sucesso!')
            this.onCancel()
          },
          error => {
            this.onError(`Erro ao atualizar Produto!`)
            this.onCancel()
          }
        )
    }
  }
}
