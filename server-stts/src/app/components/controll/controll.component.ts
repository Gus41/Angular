import { AfterContentInit, afterRender, afterRenderEffect, Component, ContentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controll',
  //imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControllComponent implements AfterContentInit {

  constructor(){
    afterRender(()=>{
      console.log("After render")
    })
  }

  //private el = inject(ElementRef);
  label = input.required<string>();

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  ngAfterContentInit(): void {
    console.log(this.control)
  }
  onClick(){
    console.log("Clicked")
    //console.log(this.el)
    console.log(this.control)
  }
}
