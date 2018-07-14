import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public items: Item[];
  public curIndex   = this.tableService.curIndex;
  public pageNum    = this.tableService.pageNum;
  public pagesIndex = this.tableService.pagesIndex;

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.items = this.tableService.items;
  }

  prevPage() {
    this.tableService.prevPage();
  }

  setPage(index: number) {
    this.tableService.setPage(index);
  }

  nextPage() {
    this.tableService.nextPage();
  }

}
