import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ControllComponent } from '../../../components/controll/controll.component';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent,ControllComponent]
})
export class NewTicketComponent {

}
