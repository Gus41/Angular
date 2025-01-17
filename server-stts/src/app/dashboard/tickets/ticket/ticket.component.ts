import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input<Ticket>();

  detailsVisible = signal(false);

  toggleDetail(){
    this.detailsVisible.update((currentValue)=>!currentValue)
  }
  close = output();


  onMarkAsRead(){
    this.close.emit()
  }
}
