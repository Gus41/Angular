import { Component, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControllComponent {

  private el = inject(ElementRef);

  label = input.required<string>();

  onClick(){
    console.log("Clicked")
    console.log(this.el)
  }
}
