import { Injectable } from '@angular/core';

import { Item } from './item';
import { DataAppTableCol } from './data-app-table-col';
import { Pagination } from './table/pagination';


@Injectable()
export class TableService {

  public tableConfig: any;

  // Array of objects Item[]
  public items: Item[];
  // Elements for navigation
  public navItems: Item[];
  // Table cell templates
  public templatesCells = [];
  // Table column templates
  public templatesHeaders = [];
  // Array for storing data app-table-col
  public dataAppTableCol: DataAppTableCol[];
  // Flag for checking the existence of a column name
  public isExist = true;
  // Name of columns from app-table-head
  public singleNameKlasses = [];
  // Name for rows class
  public classRow: string;
  // dataAppTableCol = {
  //   nameCol: '',
  //   value:   ''
  // };
  public inputName: string;
  public pages = new Pagination();

  constructor() {
  }

  public setConfig(config) {
    this.tableConfig = config;
  }

  public getData() {
    this.tableConfig.fetch(this.pages.query).subscribe((items) => {
      this.items = items.data.objects;
      this.navItems = this.items;

      this.pages.query.count = items.data.paging.records;
      this.pages.query.limit = items.data.paging.limit;
      this.pages.query.page  = items.data.paging.page;
      this.pages.query.countPages = items.data.paging.pages;
      this.pages.updateItems();
    });
    this.isLimit();
  }

  // Default limit value, if value in config is not exist
  public isLimit() {
    if (this.tableConfig.limits.length === 0) {
      this.tableConfig.limits.push(this.pages.query.limit);
    }
  }

  // Set limit value in tableComponent
  public showCountPages(count: number) {
    this.pages.query.limit = count;
    this.pages.setPage(1);
  }

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
