// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// CURRENT
import { TableService } from '../../table.service';


@Component({
  selector: '[app-table-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public templates = [];

  // Column and row indexes in template
  @Input()
  public index: number;

  constructor(public tableService: TableService) {}

  public ngOnInit(): void {
    this._initCellContext();
  }

  // Context initialization for ngTemplateOutletContext
  private _initCellContext(): void {
    this.templates = this.tableService.templatesCells;
  }
}
