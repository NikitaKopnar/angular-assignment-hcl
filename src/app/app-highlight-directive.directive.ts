import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlightDirective]',
  standalone: true
})
export class AppHighlightDirectiveDirective {
  @Input() color : any;
  backgroundcolor = 'red';
  constructor(private el: ElementRef, private renderer:Renderer2) {}
@HostListener('mouseenter') onMouseEnter() {
  this.renderer.setStyle(this.el.nativeElement,'background-color',this.color);
}
@HostListener('mouseleave') onMouseLeave()  {
  //this.renderer.setStyle(this.el.nativeElement,'background-color','blue');
  this.el.nativeElement.style.background = 'blue';
}
@HostListener('click') onClick() {
  this.el.nativeElement.style.background = "green";
}
// @HostListener('mouseover') onHover() {
//   this.el.nativeElement.style.background = 'purple';
// }
}
