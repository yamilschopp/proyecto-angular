import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCabeceraLetra]'
})
export class CabeceraLetraDirective implements OnInit {
  //@Input('appCabeceraLetra') cabecera!: string;
 
  constructor( private elemento: ElementRef, private renderer: Renderer2) {  }

  ngOnInit() : void{
     this.renderer.setStyle(this.elemento.nativeElement,'font-size','20px')
  }

}
