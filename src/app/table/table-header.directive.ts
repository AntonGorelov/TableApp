// ANGULAR
import { Directive, Input, OnInit } from '@angular/core';

import { TableService } from '../table.service';

@Directive({
  selector: '[app-table-head]'
})
export class TableHeaderDirective implements OnInit {

  @Input()
  public klass: string[];

  // Need write all values of input klass
  public klassList = [];

  constructor(private tableService: TableService) {}

  public ngOnInit(): void {
    this.klassList.push(this.klass);
    this.tableService.singleNameKlasses.push(...this.klassList);
  }
}
