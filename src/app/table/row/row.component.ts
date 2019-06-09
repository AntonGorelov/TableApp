// ANGULAR
import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

// CURRENT
import { TableService } from '../../table.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class RowComponent implements OnInit {
  // Element of array Items
  @Input()
  public item: any;
  // Array of name columns table
  @Input()
  public columns: string[];
  // Index in array row
  @Input()
  public rowIndex: number;

  public classRow: string;

  constructor(
    public tableService: TableService,
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) {
    if (this.tableService.tableConfig.rowEvents) {
      for (const eventConfig in this.tableService.tableConfig.rowEvents) {
        this._renderer.listen(_elRef.nativeElement, eventConfig, (event) => {
          this.tableService.tableConfig.rowEvents[eventConfig](event);
        });
      }
    }
  }

  public ngOnInit(): void {
    // Add name of class row. Value is set in config
    this.classRow = this.tableService.tableConfig.rowClass(this.tableService.items[this.rowIndex]);
  }

  public actionsClick(rowIndex, event: MouseEvent, btn): void {
    this.tableService.tableConfig.rowClassActions[btn].click(rowIndex, event);
  }
}
