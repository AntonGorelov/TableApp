import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

const modules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
  ,
})export class MaterialModule {}
