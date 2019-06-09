// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// CURRENT
import { TableService } from '../../table.service';


@Component({
  selector: '[app-table-cell-row]',
  templateUrl: './cell.component.html'
})
export class CellComponent implements OnInit {

  // Column and row indexes in template
  @Input()
  public index: number;
  @Input()
  public rowIndex: number;

  // Property of column and element of array Item[]
  @Input()
  public column: string;
  @Input()
  public item: any;

  public items = [];
  public templates = [];

  constructor(public tableService: TableService) {}

  public ngOnInit(): void {
    this._initCellContext();
  }

  // Context initialization for ngTemplateOutletContext
  private _initCellContext(): void {
    this.items = this.tableService.navItems;
    this.templates = this.tableService.templatesCells;
  }
}
