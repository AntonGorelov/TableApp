// ANGULAR
import { ContentChild, Directive, TemplateRef, Input } from '@angular/core';

// CURRENT
import { TableHeaderDirective } from './table-header.directive';
import { TableService } from '../table.service';
import { TableCellDirective } from './table-cell.directive';


@Directive({
  selector: 'app-table-col'
})
export class TableColDirective {

  @Input()
  public nameCol: string;

  @Input()
  public value: any;

  // Set header template
  @ContentChild(TableHeaderDirective, { read: TemplateRef })
  public set tableColumns(columnTemplate) {
    this.tableService.addTemplateHeaders(columnTemplate);
  }

  // Set cell template
  @ContentChild(TableCellDirective, { read: TemplateRef })
  public set tableItems(cellTemplate) {
    // Correction: push, so that values are not overwritten
    // this.tableService.templates = templates.toArray();
    this.tableService.addTemplateCells(cellTemplate);
  }

  constructor(private tableService: TableService) {
  }
}
