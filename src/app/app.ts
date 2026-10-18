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
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
