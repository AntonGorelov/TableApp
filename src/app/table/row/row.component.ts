import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {

  // Element of array Items
  @Input() item: any;
  // Array of name columns table
  @Input() columns: string[];
  // Index in array row
  @Input() rowIndex: number;

  public classRow: string;

  constructor(public tableService: TableService,
              private _elRef: ElementRef,
              private _renderer: Renderer2) {
    // Events are setting in config
    for (const eventConfig in this.tableService.tableConfig.rowEvents) {
      this._renderer.listen(_elRef.nativeElement, eventConfig, (event) => {
        this.tableService.tableConfig.rowEvents[eventConfig](event);
      });
    }
  }

  ngOnInit() {
    // Add name of class row. Value is set in config
    this.classRow = this.tableService.tableConfig.rowClass(this.tableService.items[this.rowIndex]);
  }

  actionsClick(rowIndex, event: MouseEvent, btn) {
    this.tableService.tableConfig.rowClassActions[btn].click(rowIndex, event);
    console.log('Data ', this.tableService.items[this.rowIndex]);
  }

}
