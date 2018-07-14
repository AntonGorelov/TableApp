import { Component, ContentChild, ElementRef } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private _itemsUrl = 'api/items';  // URL to web api

  constructor(private http: HttpClient) {}

  public config = {
    columns: ['id', 'name', 'price'],

    fetch: () => {
      return this.http.get<Item[]>(this._itemsUrl);
    }
  };
}
