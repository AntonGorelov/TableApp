import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Item } from './item';

@Injectable()
export class TableService {

  public tableConfig: any;

  // Elements for filtration
  public filteredItems: Item[];
  // Array of objects Item[]
  public items: Item[];
  // Elements for navigation
  public navItems: Item[];
  // Table cell templates
  public templatesCells = [];
  // Table column templates
  public templatesHeaders = [];
  // Array for storing data app-table-col
  public dataAppTableCol = [];
  // dataAppTableCol = {
  //   nameCol: '',
  //   value:   ''
  // };

  public pageCount = 3;
  public pageSize  = 4;
  public pageNum   = 0;
  public curIndex  = 1;
  public pageStart = 1;
  public pagesIndex: Array<number>;
  public inputName: string;
  // Flag for checking the existence of a column name
  public isExist = true;

  constructor() {}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public setConfig(config) {
    this.tableConfig = config;
  }

  // Table Pagination

  init() {
    this.curIndex = 1;
    this.pageStart = 1;
    this.pageCount = 4;

    this.filteredItems = this.items;
    this.navItems = this.filteredItems;

    this.pageNum = parseInt('' + (this.navItems.length / this.pageSize));
    if (this.navItems.length % this.pageSize !== 0) {
      this.pageNum ++;
    }

    if (this.pageNum < this.pageCount) {
      this.pageCount =  this.pageNum;
    }

    this.refreshItems();
  }

  arrayOfPageIndex(): any {
    const obj = new Array();
    for (let index = this.pageStart; index < this.pageStart + this.pageCount; index++) {
      obj.push(index);
    }
    return obj;
  }

  filterByName() {
    this.navItems = [];
    const inputVal = (<HTMLInputElement>document.getElementById('inputName')).value;
    if (inputVal !== '') {
      this.items.forEach(element => {
        if (element.name.indexOf(inputVal) >= 0) {
          this.navItems.push(element);
        }
      });
    } else {
      this.navItems = this.items;
    }
  }

  refreshItems() {
    this.navItems = this.filteredItems.slice((this.curIndex - 1) * this.pageSize, (this.curIndex) * this.pageSize);
    this.pagesIndex =  this.arrayOfPageIndex();
    console.log('curIndex =', this.curIndex);
  }

  prevPage() {
    if (this.curIndex > 1) {
      this.curIndex --;
    }
    if (this.curIndex < this.pageStart) {
      this.pageStart = this.curIndex;
    }
    this.refreshItems();
  }

  nextPage() {
    if (this.curIndex < this.pageNum) {
      this.curIndex ++;
    }
    if (this.curIndex >= (this.pageStart + this.pageCount)) {
      this.pageStart = this.curIndex - this.pageCount + 1;
    }

    this.refreshItems();
  }

  setPage(index: number) {
    this.curIndex = index;
    this.refreshItems();
  }

  // Dynamically changed data in table

  addColumn(name: string) {
    this.tableConfig.columns.push(name);
  }

  deleteColumn(name: string) {
    let index = -1;
    const colArray = this.tableConfig.columns;
    for (let i = 1; i < colArray.length; i++) {
      if (colArray[i] === name) {
        index = i;
        break;
      }
    }
    if (index > 0) {
      this.tableConfig.columns.splice(index, 1);
    }
    if (index === -1) {
      console.log('dont delete column in table');
    }
  }

  addRow(id: number, name: string, price: number) {
    const item = new Item(id, name, price);
    this.items.push(item);
    console.log('add row -> item: ', this.items);
  }

  deleteRow(id: number) {
    let index = -1;
    const itemArray = this.items;
    for (let i = 1; i < itemArray.length; i++) {
      if (id == itemArray[i].id) {
        index = i;
        console.log('del row -> index =', index);
        break;
      }
    }
    if (index > 0) {
      itemArray.splice(index, 1);
    }
    if (index === -1) {
      console.log('dont delete row item in table');
    }
  }

}
