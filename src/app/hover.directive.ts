import { Directive, HostListener, ElementRef, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input() appHover: string = 'red';

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor', "yellow"
    );
  }

  @HostListener('mouseenter') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor', "#FFFFFF"
    );
  }
  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement)
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor', this.appHover
    )
  }
}
