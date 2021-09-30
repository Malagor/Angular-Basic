import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  @Input('appShow') set show(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}
