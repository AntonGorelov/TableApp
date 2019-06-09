import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../table.service';


@Component({
  selector: '[app-table-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public templates = [];

  // Column and row indexes in template
  @Input() index: number;

  constructor(public tableService: TableService) {}

  // Context initialization for ngTemplateOutletContext
  public initCellContext() {
    this.templates = this.tableService.templatesCells;
  }

  ngOnInit() {
    this.initCellContext();
  }
}
