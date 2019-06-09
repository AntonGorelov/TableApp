// ANGULAR
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// CURRENT
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  public index: number;
  @Input()
  public rowIndex: number;

  // URL to web api
  private _itemsUrl = 'https://boilerplate.firestitch.com/api/dummy';

  constructor(
    private http: HttpClient
  ) {}

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

  public elemClick() {
    console.log('elemclick');
  }
}
