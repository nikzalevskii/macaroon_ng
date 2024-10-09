import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[buttonEffects]'
})
export class ButtonEffectsDirective implements OnInit{
  background_grad_from_def:string = 'rgb(113,8,30)';
  background_grad_to_def:string = 'rgb(215,72,92)';
  background_grad_from_new:string = 'rgb(20 129 221)';
  background_grad_to_new:string = 'rgb(46,122,187)';

  constructor(private el:ElementRef, private rend: Renderer2) {

  }

  ngOnInit() {
    this.changeElementGradientColors(this.background_grad_from_def, this.background_grad_to_def);
  }

  @HostListener('mouseenter')
  onHover() {
    // this.changeElementGradientColors(this.background_grad_from_new, this.background_grad_to_new);
    this.changeElementBoxShadow('rgba(130, 19, 40, 0.5)');
    // this.rend.setStyle(this.el.nativeElement, 'box-shadow', '0px 5px 9px 1px rgba(130, 19, 40, 0.5)');

  }
  @HostListener('mouseleave')
  onBlur() {
    // this.changeElementGradientColors(this.background_grad_from_def, this.background_grad_to_def);
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', 'none');
  }




  changeElementGradientColors(color1:string, color2:string) {
    this.rend.setStyle(this.el.nativeElement, 'background-image', 'linear-gradient(0deg,' + color1 + ' 0%,' + color2 + ' 100%)');
  }
  changeElementBoxShadow(color:string) {
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', '0px 5px 9px 1px ' + color);
  }


}
