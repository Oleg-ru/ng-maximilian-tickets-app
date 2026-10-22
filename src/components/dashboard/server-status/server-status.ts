import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.interval = setInterval(() => {
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

  ngOnDestroy() {
    if (this.interval)
      clearInterval(this.interval);
  }
}
