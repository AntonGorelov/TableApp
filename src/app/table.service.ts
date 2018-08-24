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
  public pagination = new Pagination();

  constructor() {
  }

  public setConfig(config) {
    this.tableConfig = config;
  }

  public getData() {
    this.tableConfig.fetch(this.pagination.query).subscribe((items) => {
      this.items = items.data.objects;
      this.navItems = this.items;

      // Set server response values to query values
      this.pagination.setQuery(items.data);
      this.pagination.updateItems();
    });
    this.isLimit();
  }

  // Default limit value, if value in config is not exist
  public isLimit() {
    if (this.tableConfig.limits.length === 0) {
      this.tableConfig.limits.push(this.pagination.query.limit);
    }
  }

  // Set limit value in tableComponent
  public setCountPages(count: number) {
    this.pagination.query.limit = count;
    this.pagination.setPage(1);
  }

  addTemplateHeaders(headerTemplate: any) {
    this.templatesHeaders.push(headerTemplate);
  }

  addTemplateCells(cellTemplate: any) {
    this.templatesCells.push(cellTemplate);
  }

}
