import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: boolean): string {
    switch(value){
      case true: return 'shopping_cart';
      case false: return 'remove_shopping_cart';
    }
    return "shopping_cart";
  }

}
