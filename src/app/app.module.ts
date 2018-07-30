import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './table/row/row.component';
import { HeaderComponent } from './table/header/header.component';
import { PaginationComponent } from './table/pagination/pagination.component';
import { CellComponent } from './table/cell/cell.component';
import { FormsModule } from '@angular/forms';

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
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
