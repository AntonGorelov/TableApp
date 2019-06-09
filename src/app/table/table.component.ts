import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  AfterContentInit,
  ElementRef, ViewChild
} from '@angular/core';

import { TableService } from '../table.service';
import { TableColDirective } from './table-col.directive';
import { DataAppTableCol } from '../data-app-table-col';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ TableService ]
})

export class TableComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() config;

  public id: number;
  public name: string;
  public price: number;

  // Array of columns
  public columns = [];
  // Name of column for add and delete in table
  public nameColumn: string;
  // Element for filterName
  public inputName = this.tableService.inputName;
  // Flag for displaying detailed information in the table
  public visible = false;
  // Objects for storing column information for transfer to a service
  public dataCols = [];
  // Column Templates
  public templatesOfColumns = [];
  // Flag for checking the existence of a column name
  public isExistNameCol = this.tableService.isExist;
  // Array for save name of classes from config and app-table-head selector
  public fillKlass = [];

  @ViewChild('search')
  public searchField: ElementRef;

  @ContentChildren(TableColDirective)
  public tableColDirectives: QueryList<TableColDirective>;

  ngAfterContentInit(): void {

    // If name of classes load from config => fill same names;
    this.fillKlass = Array.from([].fill.call({length: 3}, ...this.tableService.tableConfig.header.klass) );

    this.templatesOfColumns.push(this.tableColDirectives.toArray());
    // Length of array of template names
    const lengthOfTemplatesOfColumns = this.templatesOfColumns[0].length;

    for (let i = 0; i < lengthOfTemplatesOfColumns; i++) {
      this.dataCols[i] = new DataAppTableCol(this.templatesOfColumns[0][i].nameCol, this.templatesOfColumns[0][i].value,
        this.tableService.templatesHeaders[i], this.tableService.templatesCells[i], this.tableService.tableConfig.header.align);
      // Add name of class in DataAppTableCol
      this.dataCols[i].addClass(this.fillKlass);
      this.dataCols[i].addClass(this.tableService.singleNameKlasses);

      // Checking the existence of a column name
      if (this.dataCols[i].nameCol === undefined) {
        this.dataCols[i].nameCol = this.dataCols[i].value;
      }
      console.log(this.dataCols[i].klass[i]);
    }
    this.tableService.dataAppTableCol = this.dataCols;
    console.log('TableComponent => dataCols => tS', this.tableService.dataAppTableCol);

    // Load name of columns from dataCols object
    for (let i = 0; i < lengthOfTemplatesOfColumns; i++) {
      this.columns.push(this.tableService.dataAppTableCol[i].nameCol);
    }
  }

  constructor(public tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.setConfig(this.config);
    this.tableService.getData();

    this.tableService.pagination.itemSubject.subscribe(() => {
      this.tableService.getData();
    });
    this.filterByName();
  }

  ngAfterViewInit(): void {
  }

  // Filtering table items by name
  public filterByName() {
    fromEvent(this.searchField.nativeElement, 'keyup').pipe(debounceTime(500)).subscribe( () => {
        this.tableService.pagination.query.keyword = this.searchField.nativeElement.value;
        this.tableService.getData();
    });
  }

  // Show information in the table
  public showNote() {
    this.visible = !this.visible;
  }

  public setCountPages(count: number) {
    this.tableService.setCountPages(count);
  }

}
