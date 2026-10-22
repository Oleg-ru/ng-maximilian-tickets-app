import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }

      this.cdr.markForCheck();
    }, 4000);
  }
}
