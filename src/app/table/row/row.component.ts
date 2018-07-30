import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {

  // Элемент массива Items
  @Input() item: any;
  // Массив заголовков таблицы
  @Input() columns: string[];
  // Счетчик по массиву row
  @Input() rowIndex: number;

  constructor() {}

  ngOnInit() {}
}
