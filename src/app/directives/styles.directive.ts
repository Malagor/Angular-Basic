import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective {
  @Input() dStyles: {color?: string, fontWeight?: string} = {color: 'inherit', fontWeight: 'normal'};

  @HostBinding('class.shadow') myClass = false;
  @HostBinding('style.color') myColor = this.dStyles.color;
  @HostBinding('style.myWeight') myWeight = this.dStyles.fontWeight;


  constructor(private el: ElementRef, private render: Renderer2) {
  }

  @HostListener('mouseenter') onEnter() {
    // this.render.addClass(this.el.nativeElement, 'shadow');
    // this.render.setStyle(this.el.nativeElement, 'color', this.color)
    // this.render.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)

    this.myClass = true;
    this.myColor = this.dStyles.color;
    this.myWeight = this.dStyles.fontWeight;
  }
  @HostListener('mouseleave') onLeave() {
    // this.render.removeClass(this.el.nativeElement, 'shadow');
    // this.render.setStyle(this.el.nativeElement, 'color', 'inherit');
    // this.render.setStyle(this.el.nativeElement, 'fontWeight', 'normal')

    this.myClass = false;
    this.myColor = 'inherit';
    this.myWeight = 'normal';



  }
}
