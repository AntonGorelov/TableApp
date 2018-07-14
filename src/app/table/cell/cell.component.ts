import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: '[app-table-cell]',
  templateUrl: './cell.component.html'
})
export class CellComponent implements OnInit {

  // Индексы колонки и столбца в шаблоне
  @Input() index: number;
  @Input() rowIndex: number;

  // Свойства колонки и элемента массива Items[]
  @Input() column: string;
  @Input() item: any;

  public columns = [];
  public items = [];
  public templates = [];

  constructor(private tableService: TableService) {}

  // Инициализация контекста для ngTemplateOutletContext
  public initCellContext() {
    this.columns = this.tableService.tableConfig.columns;
    this.items = this.tableService.navItems;
    this.templates = this.tableService.templates;
    console.log('cell->initCellContext->items:', this.items);
  }

  ngOnInit() {
    this.initCellContext();
  }
}
