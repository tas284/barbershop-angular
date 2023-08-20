import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() labelSearch: string = "";
  @Output() filter = new EventEmitter<string>();

  search(value: string) {
    this.filter.emit(value)
  }
}
