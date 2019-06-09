// ANGULAR
import { Component } from '@angular/core';

// CURRENT
import { TableService } from '../../table.service';


@Component({
  selector: 'app-table-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  public pageNum    = this.tableService.pagination.query.countPages;
  public pagesIndex = this.tableService.pagination.pagesIndex;

  constructor(
    public tableService: TableService
  ) {}

  public prevPage(): void {
    this.tableService.pagination.prevPage();
    this._arrayPages();
  }

  public setPage(index: number): void {
    this.tableService.pagination.setPage(index);
    this._arrayPages();
  }

  public nextPage(): void {
    this.tableService.pagination.nextPage();
    this._arrayPages();
  }

  public fstPage(): void {
    this.tableService.pagination.fstPage();
    this._arrayPages();
  }

  public lastPage(): void {
    this.tableService.pagination.lastPage();
    this._arrayPages();
  }

  public setStyle(page): any {
    return { 'font-weight': page === this.tableService.pagination.query.page ? 'bold' : 'normal' };
  }

  private _arrayPages(): void {
    this.pagesIndex = this.tableService.pagination.arrayPages();
  }

}
