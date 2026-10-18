import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { ServerStatus } from '../components/dashboard/server-status/server-status';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus],
})
export class App {

}
