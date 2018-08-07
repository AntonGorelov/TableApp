import { Component, OnInit, Input } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {

  // Element of array Items
  @Input() item: any;
  // Array of name columns table
  @Input() columns: string[];
  // Index in array row
  @Input() rowIndex: number;

  constructor(public tableService: TableService) {}

  ngOnInit() {
    // Add name of class row. Value is set in config
    this.tableService.classRow = this.tableService.tableConfig.rowClass(this.tableService.items[this.rowIndex]);
  }
}
