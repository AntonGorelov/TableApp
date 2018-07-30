import { Component, Input, OnInit } from '@angular/core';
import {TableService} from '../../table.service';

@Component({
  selector: '[app-table-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public columns: string[];
  public templates = [];

  // Индексы колонки и столбца в шаблоне
  @Input() index: number;

  constructor(private tableService: TableService) {}

  // Инициализация контекста для ngTemplateOutletContext
  public initCellContext() {
    this.templates = this.tableService.templatesCells;
    console.log('header->initCellContext->headers');
  }

  ngOnInit() {
    this.initCellContext();
  }

  // ngAfterViewInit() {
  //   console.log('headerTemplate');
  // }
}
