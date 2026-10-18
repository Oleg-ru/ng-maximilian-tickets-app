import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { ServerStatus } from '../components/dashboard/server-status/server-status';
import { Tickets } from '../components/dashboard/tickets/tickets';
import { Traffic } from '../components/dashboard/traffic/traffic';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, Tickets, Traffic],
})
export class App {}
