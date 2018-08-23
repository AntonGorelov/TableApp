import { Component, OnInit } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public curIndex   = this.tableService.pages.query.page;
  public pageNum    = this.tableService.pages.query.countPages;
  public pagesIndex = this.tableService.pages.pagesIndex;

  constructor(private tableService: TableService) {}

  ngOnInit() {
  }

  prevPage() {
    this.tableService.pages.prevPage();
    this.pagesIndex = this.arrayPages();
  }

  setPage(index: number) {
    this.tableService.pages.setPage(index);
    this.pagesIndex = this.arrayPages();
  }

  nextPage() {
    this.tableService.pages.nextPage();
    this.pagesIndex = this.arrayPages();
  }

  fstPage() {
    this.tableService.pages.fstPage();
    this.pagesIndex = this.arrayPages();
  }

  lastPage() {
    this.tableService.pages.lastPage();
    this.pagesIndex = this.arrayPages();
  }

  arrayPages(): any {
    this.tableService.pages.arrayPages();
  }

  setStyle(page) {
    return { 'font-weight': page === this.tableService.pages.query.page ? 'bold' : 'normal' };
  }

}
