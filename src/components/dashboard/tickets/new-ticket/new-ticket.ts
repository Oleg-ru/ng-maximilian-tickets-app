import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { Control } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(tittle: string, textarea: string) {
    console.log(tittle);
    console.log(textarea);
    this.form?.nativeElement.reset();
  }

  ngOnInit() {
    console.log('init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }
}
