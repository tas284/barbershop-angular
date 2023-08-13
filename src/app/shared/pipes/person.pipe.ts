import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'customer': return 'person';
      case 'barber': return 'content_cut';
    }
    return 'content_cut';
  }

}
