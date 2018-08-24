import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../table.service';


@Component({
  selector: '[app-table-cell-row]',
  templateUrl: './cell.component.html'
})
export class CellComponent implements OnInit {

  // Column and row indexes in template
  @Input() index: number;
  @Input() rowIndex: number;

  // Property of column and element of array Item[]
  @Input() column: string;
  @Input() item: any;

  public items = [];
  public templates = [];

  constructor(public tableService: TableService) {}

  // Context initialization for ngTemplateOutletContext
  public initCellContext() {
    this.items = this.tableService.navItems;
    this.templates = this.tableService.templatesCells;
  }

  ngOnInit() {
    this.initCellContext();
  }
}
