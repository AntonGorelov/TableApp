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

  // Get subject value
  public get itemSubject(): Observable<null> {
    return this._itemSubject.asObservable();
  }

  // Set subject value
  public setItemSubject() {
    return this._itemSubject.next();
  }

  // Set values in query: count, limit, page, countPages
  public setQuery(query) {
    this.query.count = query.paging.records;
    this.query.limit = query.paging.limit;
    this.query.page  = query.paging.page;
    this.query.countPages = query.paging.pages;
  }

  constructor() {
  }

  // Finding start index
  public deltaStart() {
    const start = this.query.page - this.delta;
    return (start > 0) ? start : 1;
  }

  // Finding end index
  public deltaEnd() {
    const end = this.query.page + this.delta;
    return (end < this.query.countPages) ? end : this.query.countPages;
  }

  // Adding elements for navigation bar in array
  public arrayPages() {
    this.pages = [];
    for (let i = this.deltaStart(); i < this.deltaEnd() + 1; i++) {
      this.pages.push(i);
    }
    return this.pages;
  }

  public updateItems() {
    this.pagesIndex = this.arrayPages();
  }

  public prevPage() {
    if (this.query.page > 1) {
      this.query.page --;
    }
    if (this.query.page < this.pageStart) {
      this.pageStart = this.query.page;
    }
    this._itemSubject.next();
  }

  public nextPage() {
    if (this.query.page < this.query.countPages) {
      this.query.page ++;
    }
    this._itemSubject.next();
  }

  public setPage(index: number) {
    this.query.page = index;
    this._itemSubject.next();
  }

  public fstPage() {
    this.query.page = this.pageStart;
    this._itemSubject.next();
  }

  public lastPage() {
    this.query.page = this.query.countPages;
    this._itemSubject.next();
  }

}
