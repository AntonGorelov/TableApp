import { Component, Input } from '@angular/core';
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
    header: {
      klass: ['header-test-defaults-class'],
      align: 'center'
    },
    rowClass: (row) => {
      return 'custom-row-class';
    },
    fetch: () => {
      return this.http.get<Item[]>(this._itemsUrl);
    }
  };

  // Индексы колонки и столбца в шаблоне
  @Input() index: number;
  @Input() rowIndex: number;

  public elemClick() {
    console.log('elemclick->index', 'rowIndex');
  }
}
