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

  public headerTemplate;
  public cellTemplate;

  // Set header template
  @ContentChild(TableHeaderDirective, { read: TemplateRef })
  set tableColumns(columnTemplate) {
    this.headerTemplate = columnTemplate;
    this.tableService.templatesHeaders.push(this.headerTemplate);
    // this.tableService.tableConfig.columns = columns;
    // this.tableService.templates = this.columns;
  }

  // Set cell template
  @ContentChild(TableCellDirective, { read: TemplateRef })
  set tableItems(template) {
    this.cellTemplate = template
    // Correction: push, so that values are not overwritten
    // this.tableService.templates = templates.toArray();
    this.tableService.templatesCells.push(template);
    // this.tableService.tableConfig.columns = this.columns;
  }

  constructor(private tableService: TableService) {
  }
}
