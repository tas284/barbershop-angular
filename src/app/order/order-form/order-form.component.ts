import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {

  form!: FormGroup;

  constructor (
    private service: OrderService,
    private snackBar: MatSnackBar,
    private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const order = this.route.snapshot.data['order'];
    this.form = this.formBuilder.group({
      id: [order.id],
      code: [order.code],
      customerId: [order.customer.id],
      customerName: [order.customer.name],
      customerPhone: [order.customer.phone],
      products: [order.products],
      discount: [order.discount],
      status: [order.status],
      total: [order.total],
      updatedAt: [order.updatedAt],
      createdAt: [order.createdAt]
    });
  }

  onSubmit() {
    this.onSave();
  }

  onCancel(){
    this.location.back();
  }

  onMessage(message: string, duration = 5000){
    this.snackBar.open(message, '', { duration: duration })
  }

  isNew(): boolean{
   const id = this.route.snapshot.params["id"];
   return id === undefined ? true : false;
  }

  // isActiveToBoolean(): void {
  //   this.form.value.status = JSON.parse(this.form.value.status);
  // }

  // isActiveToString(status: boolean): string {
  //   return status ? "true" : "false";
  // }

  onSave() {
    //this.isActiveToBoolean();
    if(this.isNew()){
      this.service.save(this.form.value)
        .subscribe(
          value => {
            this.onMessage('Venda cadastrada com sucesso!')
            this.onCancel()
          },
          error => {
            this.onMessage(`Erro ao cadastrar Venda: ${error.error}`, 10000)
          }
        )
    } else{
      this.service.update(this.form.value, this.form.value.id)
        .subscribe(
          value => {
            this.onMessage('Venda atualizada com sucesso!')
            this.onCancel()
          },
          error => {
            this.onMessage(`Erro ao atualizar Venda: ${error.error}`, 10000)
          }
        )
    }
  }
}
