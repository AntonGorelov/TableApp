import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tableEvent]'
})
export class TableEventDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor(color: string): void {
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', color);
  }
}
