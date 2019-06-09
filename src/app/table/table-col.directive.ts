import { ContentChild, Directive, TemplateRef, Input } from '@angular/core';

import { TableHeaderDirective } from './table-header.directive';
import { TableService } from '../table.service';
import { TableCellDirective } from './table-cell.directive';


@Directive({
  selector: 'app-table-col'
})
export class TableColDirective {

  @Input() nameCol: string;
  @Input() value: any;

  // Set header template
  @ContentChild(TableHeaderDirective, { read: TemplateRef })
  set tableColumns(columnTemplate) {
    this.tableService.addTemplateHeaders(columnTemplate);
  }

  // Set cell template
  @ContentChild(TableCellDirective, { read: TemplateRef })
  set tableItems(cellTemplate) {
    // Correction: push, so that values are not overwritten
    // this.tableService.templates = templates.toArray();
    this.tableService.addTemplateCells(cellTemplate);
  }

  constructor(private tableService: TableService) {
  }
}
