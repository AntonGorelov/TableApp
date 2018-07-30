import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: '[app-table-cell-row]',
  templateUrl: './cell.component.html'
})
export class CellComponent implements OnInit {

  // Индексы колонки и столбца в шаблоне
  @Input() index: number;
  @Input() rowIndex: number;

  // Свойства колонки и элемента массива Items[]
  @Input() column: string;
  @Input() item: any;

  public items = [];
  public templates = [];

  constructor(private tableService: TableService) {}

  // Инициализация контекста для ngTemplateOutletContext
  public initCellContext() {
    this.items = this.tableService.navItems;
    this.templates = this.tableService.templatesCells;
  }

  ngOnInit() {
    this.initCellContext();
  }
}
