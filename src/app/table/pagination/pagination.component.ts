import { Component } from '@angular/core';
import { TableService } from '../../table.service';


@Component({
  selector: 'app-table-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  public pageNum    = this.tableService.pagination.query.countPages;
  public pagesIndex = this.tableService.pagination.pagesIndex;

  constructor(public tableService: TableService) {}

  public prevPage() {
    this.tableService.pagination.prevPage();
    this.arrayPages();
  }

  public setPage(index: number) {
    this.tableService.pagination.setPage(index);
    this.arrayPages();
  }

  public nextPage() {
    this.tableService.pagination.nextPage();
    this.arrayPages();
  }

  public fstPage() {
    this.tableService.pagination.fstPage();
    this.arrayPages();
  }

  public lastPage() {
    this.tableService.pagination.lastPage();
    this.arrayPages();
  }

  public arrayPages(): any {
    this.pagesIndex = this.tableService.pagination.arrayPages();
  }

  public setStyle(page) {
    return { 'font-weight': page === this.tableService.pagination.query.page ? 'bold' : 'normal' };
  }

}
