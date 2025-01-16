import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ControllComponent } from '../../../components/controll/controll.component';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent,ControllComponent, FormsModule],
})
export class NewTicketComponent {

  onSubmit(title: string, content: string){
    if(title.trim() == '' || content.trim() == ''){
      return
    }

  }
}
