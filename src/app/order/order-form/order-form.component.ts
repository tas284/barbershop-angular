import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { PersonService } from 'src/app/person/service/person.service';
import { Person } from 'src/app/person/model/person';

export interface User {
  name: string;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {

  form!: FormGroup;
  searchCustomer = new FormControl<string>('');
  people$?: Observable<Person[]>;


  constructor (
    private service: OrderService,
    private personService: PersonService,
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

    this.people$ = this.searchCustomer.valueChanges
      .pipe(
        filter(value => value!.length >= 2),
        distinctUntilChanged(),
        debounceTime(400),
        switchMap(
          (data: any) => this.personService.search(data)
        )
      )
  }

  onClick() {
    this.searchCustomer.valueChanges
      .pipe(
        tap(data => console.log(data))
      ).subscribe()
  }

  displayFn(person: Person): string {
    return person && person.firstName ? person.firstName + " " + person.lastName : '';
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

  onSave(){
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
