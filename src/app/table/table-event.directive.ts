import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tableEvent]'
})
export class TableEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  private changeColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
