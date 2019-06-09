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

  // URL to web api
  private _itemsUrl = 'https://boilerplate.firestitch.com/api/dummy';

  constructor(private http: HttpClient) {}

  public config = {
    columns: ['date', 'name', 'guid'],
    limits: [5, 10, 20, 30, 70],
    header: {
      klass: ['header-test-defaults-class'],
      align: 'center'
    },
    rowClass: (row) => {
      return 'custom-row-class';
    },
    rowEvents: {
      click: function (event) {
        console.log('click => rowEvent');
      },
      mouseover: function (event) {
        console.log('mouseover => rowEvent');
      }
    },
    rowClassActions: [
      {
        click: (row, event) => {
          console.log('Cancel', row, event);
        },
        label: 'Cancel',
      },
      {
        click: (row, event) => {
          console.log('Save', row, event);
        },
        label: 'Save',
      }
    ],
    fetch: (query) => {
      return this.http.get<Item[]>(this._itemsUrl, { params: query });
    }
  };

  @Input() index: number;
  @Input() rowIndex: number;

  public elemClick() {
    console.log('elemclick');
  }
}
