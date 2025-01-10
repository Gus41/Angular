import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;

  //input function returns a readOnly InputSignal
  avatar = input.required<string>()
  name = input.required<string>()

  onSelectUser() {

  }

}
