import { Component, ChangeDetectorRef, OnInit, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private destroyRef = inject(DestroyRef);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const interval = setInterval(() => {
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

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  // ngOnDestroy() {
  //   if (this.interval)
  //     clearInterval(this.interval);
  // }
}
