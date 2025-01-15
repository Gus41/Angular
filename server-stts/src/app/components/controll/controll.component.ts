import { Component, input } from '@angular/core';

@Component({
  selector: 'app-controll',
  //imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css'
})
export class ControllComponent {
  label = input.required<string>();
}
