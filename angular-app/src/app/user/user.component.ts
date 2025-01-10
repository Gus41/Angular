import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../sharedc/card/card.component";
@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User
  @Input({required:true}) active!: boolean
  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
