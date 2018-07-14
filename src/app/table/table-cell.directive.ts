import { Directive } from '@angular/core';

@Directive({
  selector: '[app-table-col]'
})
export class TableCellDirective {

  constructor() {
    console.log('tablecol');
  }

}
