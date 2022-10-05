import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[change-color]'
})
export class ChangeColorDirective {

  @Input('change-color') color: string = ''
  
  @HostListener("click")
  public changeColor(){
    if(this.color==="red"){
      //this.element.nativeElement.class = "red-button"
       if(this.element.nativeElement.classList.value==='red-button'){
        this.renderer.removeClass(this.element.nativeElement,'red-button')
       }else{
        this.renderer.addClass(this.element.nativeElement,'red-button')
       }
      
      
    }
    else{
      if(this.element.nativeElement.classList.value==='blue-button'){
        this.renderer.removeClass(this.element.nativeElement,'blue-button')
       }else{
        this.renderer.addClass(this.element.nativeElement,'blue-button')
       }
    }
    console.log(
      
    )
    
  }

  constructor(private element:ElementRef, private renderer:Renderer2) { }

}
