import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];


  onAdd(data: {title:string, text:string}){
    const ticket: Ticket = {
      title: data.title,
      request: data.text,
      id: Math.random().toString(),
      status: 'open'
    }
    this.tickets.push(ticket)
  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map((t)=>{
      if(t.id == id){
        return{
          ...t, status: 'closed'
        }
      }
      return t
    })

  }

}
