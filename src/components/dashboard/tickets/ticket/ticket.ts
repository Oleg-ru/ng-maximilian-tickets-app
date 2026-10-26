import { Component, input, signal } from '@angular/core';
import { TicketType } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  data = input.required<TicketType>();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.update(prev => !prev)
  }
}
