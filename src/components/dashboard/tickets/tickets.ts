import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { Ticket } from './ticket.model';
import { NewTicketType } from './new-ticket/new-ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: Ticket[] = [];

  onAdd(ticketData: NewTicketType) {
    const ticket: Ticket = {
      id: crypto.randomUUID(),
      status: 'open',
      title: ticketData.title,
      request: ticketData.text,
    }
    this.tickets.push(ticket)
  };
}
