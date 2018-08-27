import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './table/row/row.component';
import { HeaderComponent } from './table/header/header.component';
import { PaginationComponent } from './table/pagination/pagination.component';
import { CellComponent } from './table/cell/cell.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

// Directives
import { TableEventDirective } from './table/table-event.directive';
import { TableNoteDirective } from './table/table-note.directive';
import { TableColDirective } from './table/table-col.directive';
import { TableHeaderDirective } from './table/table-header.directive';
import { TableCellDirective } from './table/table-cell.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    HeaderComponent,
    PaginationComponent,
    CellComponent,
    TableEventDirective,
    TableNoteDirective,
    TableColDirective,
    TableHeaderDirective,
    TableCellDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
