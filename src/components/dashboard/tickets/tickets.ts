import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketType } from './ticket.model';
import { NewTicketType } from './new-ticket/new-ticket.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketType[] = [];

  onAdd(ticketData: NewTicketType) {
    const ticket: TicketType = {
      id: crypto.randomUUID(),
      status: 'open',
      title: ticketData.title,
      request: ticketData.text,
    };
    this.tickets.push(ticket);
  }
}
