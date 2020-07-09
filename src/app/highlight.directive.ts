import {Directive, ElementRef, Renderer2, Input} from '@angular/core';
 
@Directive({
    selector: '[highlight]',
})
export class HighlightDirective{
    @Input() set highlight (damage:number) {
      if (damage>50) {
        this.renderer2.setStyle(
          this.elementRef.nativeElement, 'border', '4px solid red'
        );
      } 
    }  
    constructor(private elementRef: ElementRef, private renderer2: Renderer2){}
}
   
