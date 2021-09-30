import {Component, EventEmitter, Output} from '@angular/core';

export type Field = 'no_filter' | 'title' | 'body';


export interface IFilter {
  field: Field,
  query: string,
}

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.less']
})
export class PostFilterComponent {
  query: string = '';
  field: Field = 'no_filter';

  @Output() onInput: EventEmitter<IFilter> = new EventEmitter();

  sendData() {
    this.onInput.emit( {
      field: this.field,
      query: this.query.toLowerCase().trim()});
  }

  setField(field: Field) {
    this.field = field;
    this.sendData();
  }
}
