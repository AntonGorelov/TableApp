import { AfterViewInit, Component, ContentChildren, Input, OnInit, TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { TableService } from '../table.service';
import { Item } from '../item';
import { TableColDirective } from './table-col.directive';
import { DataAppTableCol } from '../data-app-table-col';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [ TableService ]
})

export class TableComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() config;

  // Array of all elements
  public items: Item[] = [];
  // Array of columns
  public columns = [];
  // Name of column for add and delete in table
  public nameColumn: string;
  // Element for filterName
  public inputName = this.tableService.inputName;
  // Flag for displaying detailed information in the table
  public visible = false;

  public id: number;
  public name: string;
  public price: number;

  // Objects for storing column information for transfer to a service
  public dataCols = [];
  // Column Templates
  public templatesOfColumns = [];
  // Flag for checking the existence of a column name
  public isExistNameCol = this.tableService.isExist;

  @ContentChildren(TableColDirective) tableColDirectives: QueryList<TableColDirective>;

  ngAfterContentInit(): void {

    this.templatesOfColumns.push(this.tableColDirectives.toArray());
    // Length of array of template names
    const lengthOfTemplatesOfColumns = this.templatesOfColumns[0].length;
    for (let i = 0; i < lengthOfTemplatesOfColumns; i++) {
      this.columns.push(this.templatesOfColumns[0][i].nameCol);

      this.dataCols[i] = new DataAppTableCol(
        this.templatesOfColumns[0][i].nameCol,
        this.templatesOfColumns[0][i].value,
        this.tableService.templatesHeaders[i],
        this.tableService.templatesCells[i],
        this.tableService.tableConfig.header.klass[i]);

      // Checking the existence of a column name
      if (this.dataCols[i].nameCol === undefined) {
        this.isExistNameCol = false;
        this.dataCols[i].nameCol = 'header!';
      } else {
        this.isExistNameCol = true;
      }
      console.log('TableComponent => isExistNameCol: ', this.isExistNameCol);
    }

    console.log('table component dataCols =', this.dataCols);
    // Adding column data to the service
    // this.tableService.dataAppTableCol = this.dataCols;
  }

  constructor(public tableService: TableService) {}

  ngOnInit(): void {
    this.tableService.setConfig(this.config);
    // this.columns = this.tableService.tableConfig.columns;
    this.tableService.tableConfig.fetch().subscribe((items) => {
      this.items = items;
      this.tableService.items = this.items;
      this.tableService.init();
    });
  }

  ngAfterViewInit(): void {
  }

  addColumn(nameColumn: string) {
    this.tableService.addColumn(nameColumn);
  }

  deleteColumn(nameColumn: string) {
    this.tableService.deleteColumn(nameColumn);
  }

  addRow(id: number, name: string, price: number) {
    this.tableService.addRow(id, name, price);
  }

  deleteRow(id: number) {
    this.tableService.deleteRow(id);
  }

  // Filtering table items by name
  filterByName() {
    this.tableService.filterByName();
  }

  // The action is active for the add, delete buttons
  disableColumn() {
    return this.nameColumn === '';
  }

  // Show information in the table
  showNote() {
    this.visible = !this.visible;
  }

}
