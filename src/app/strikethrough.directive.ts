import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  constructor(private el:ElementRef) { }
  @HostListener('click') onClicks(){
    this.textDeco('line-through')
  }
  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('None')
  }
  private textDeco(action:string){
   this.el.nativeElement.style.textDecoration = action;
  }
}
