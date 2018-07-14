import { AfterViewInit, Component, ContentChildren, Input, OnInit, TemplateRef } from '@angular/core';
import { TableService } from '../table.service';
import { Item } from '../item';
import { TableCellDirective } from './table-cell.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService]
})

export class TableComponent implements OnInit, AfterViewInit {

  @Input() config;

  // Массив всех элементов
  public items: Item[] = [];
  // Массив столбцов
  public columns: string[];
  // Название столбца для добавления
  public nameColumn: string;
  // Элемент для filterName
  public inputName = this.tableService.inputName;
  // Флаг для показа подробной информации в таблице
  public visible = false;

  public id: number;
  public name: string;
  public price: number;

  // Шаблоны ячеек таблицы
  public templates = [];

  @ContentChildren(TableCellDirective, { read: TemplateRef })
  set tableCells(cells) {
    this.templates = cells.toArray();
    this.tableService.templates = this.templates;
  }

  constructor(public tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.setConfig(this.config);
    this.columns = this.tableService.tableConfig.columns;
    this.tableService.tableConfig.fetch().subscribe((items) => {
      this.items = items;
      this.tableService.items = this.items;
      this.tableService.init();
    });
  }

  ngAfterViewInit(): void {
    console.log('tableCells: ', this.tableCells);
  }

  addColumn(nameColumn: string) {
    this.tableService.addColumn(nameColumn);
  }

  deleteColumn(nameColumn: string) {
    this.tableService.deleteColumn(nameColumn);
  }

  addRow(id: number, name: string, price: number) {
    this.tableService.addRow(id, name, price);
  }

  deleteRow(id: number) {
    this.tableService.deleteRow(id);
  }

  // Фильтрация элементов таблицы по имени
  filterByName() {
    this.tableService.filterByName();
  }

  // Действие активен для кнопок добавления, удаления
  disableColumn() {
    return this.nameColumn === '';
  }

  // Показать информацию в таблице
  showNote() {
    this.visible = !this.visible;
  }

}
