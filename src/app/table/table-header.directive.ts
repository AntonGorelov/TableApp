import { Directive, Input, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Directive({
  selector: '[app-table-head]'
})
export class TableHeaderDirective implements OnInit {

  @Input() klass: string;

  constructor(private tableService: TableService) {
  }

  ngOnInit() {
    this.applyNameClasses();
  }

  applyNameClasses() {
    const el = document.querySelector('tr');
    // Add to DOMTokenList - interface, contains list of the class names
    el.classList.add(...this.tableService.tableConfig.header.klass);

    if (this.klass !== undefined) {
      this.tableService.tableConfig.header.klass.push(this.klass);
      // доб на td
    }

    if (this.tableService.tableConfig.header.klass !== '') {

    }
  }
}
