import { Directive, Input, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Directive({
  selector: '[app-table-head]'
})
export class TableHeaderDirective implements OnInit {

  @Input() klass: string[];
  // Need write all values of input klass
  public klassList = [];

  constructor(private tableService: TableService) {
  }

  ngOnInit(): void {
    this.klassList.push(this.klass);
    this.tableService.singleNameKlasses.push(...this.klassList);
  }
}
