import { Item } from '../item';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export class Pagination {

  // Array of objects Item[]
  public items: Item[];
  // Elements for navigation
  public navItems: Item[];

  public pageStart = 1;
  public delta = 2;
  public pagesIndex: Array<number>;

  public query = {
    // Total count of elements from API
    count: 225,
    // Count elements in page
    limit: 5,
    // Current page
    page: 1,
    // Count pages
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

  public pages = [];

  constructor() {
  }

  // Finding start index
  deltaStart() {
    const start = this.query.page - this.delta;
    return (start > 0) ? start : 1;
  }

  // Finding end index
  deltaEnd() {
    const end = this.query.page + this.delta;
    return (end < this.query.countPages) ? end : this.query.countPages;
  }

  // Adding elements for navigation bar in array
  arrayPages() {
    this.pages = [];
    for (let i = this.deltaStart(); i < this.deltaEnd() + 1; i++) {
      this.pages.push(i);
    }
    return this.pages;
  }

  updateItems() {
    this.pagesIndex = this.arrayPages();
  }

  prevPage() {
    if (this.query.page > 1) {
      this.query.page --;
    }
    if (this.query.page < this.pageStart) {
      this.pageStart = this.query.page;
    }
    this._itemSubject.next();
    this.updateItems();
  }

  nextPage() {
    if (this.query.page < this.query.countPages) {
      this.query.page ++;
    }
    this._itemSubject.next();
    this.updateItems();
  }

  setPage(index: number) {
    this.query.page = index;
    this._itemSubject.next();
    this.updateItems();
  }

  fstPage() {
    this.query.page = this.pageStart;
    this._itemSubject.next();
    this.updateItems();
  }

  lastPage() {
    this.query.page = this.query.countPages;
    this._itemSubject.next();
    this.updateItems();
  }

}
