import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


export class Pagination {

  public pageStart = 1;
  public delta = 2;
  public pagesIndex: Array<number>;
  public pages = [];

  public query = {
    // Total count of elements from API
    count: 225,
    // Count elements in page
    limit: 5,
    // Current page
    page: 1,
    // Count pagination
    countPages: 0,
    // Search query
    keyword: ''
  };

  // Subject for update items in table
  private _itemSubject = new Subject<null>();

  constructor() {}

  // Get subject value
  public get itemSubject(): Observable<null> {
    return this._itemSubject.asObservable();
  }

  // Set subject value
  public setItemSubject(): any {
    return this._itemSubject.next();
  }

  // Set values in query: count, limit, page, countPages
  public setQuery(query): void {
    this.query.count = query.paging.records;
    this.query.limit = query.paging.limit;
    this.query.page  = query.paging.page;
    this.query.countPages = query.paging.pages;
  }

  // Finding start index
  public deltaStart(): number {
    const start = this.query.page - this.delta;
    return (start > 0) ? start : 1;
  }

  // Finding end index
  public deltaEnd(): number {
    const end = this.query.page + this.delta;
    return (end < this.query.countPages) ? end : this.query.countPages;
  }

  // Adding elements for navigation bar in array
  public arrayPages(): any {
    this.pages = [];
    for (let i = this.deltaStart(); i < this.deltaEnd() + 1; i++) {
      this.pages.push(i);
    }
    return this.pages;
  }

  public updateItems(): void {
    this.pagesIndex = this.arrayPages();
  }

  public prevPage(): void {
    if (this.query.page > 1) {
      this.query.page --;
    }
    if (this.query.page < this.pageStart) {
      this.pageStart = this.query.page;
    }
    this._itemSubject.next();
  }

  public nextPage(): void {
    if (this.query.page < this.query.countPages) {
      this.query.page ++;
    }
    this._itemSubject.next();
  }

  public setPage(index: number): void {
    this.query.page = index;
    this._itemSubject.next();
  }

  public fstPage(): void {
    this.query.page = this.pageStart;
    this._itemSubject.next();
  }

  public lastPage(): void {
    this.query.page = this.query.countPages;
    this._itemSubject.next();
  }

  // Material Table
  public pageChange(event): void {
    this.query.page = event.pageIndex + 1;
    this.query.limit = event.pageSize;
    this._itemSubject.next();
  }

}
