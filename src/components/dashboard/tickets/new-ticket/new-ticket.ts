import { AfterViewInit, Component, ElementRef, output, ViewChild } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { Control } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';
import { NewTicketType } from './new-ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<NewTicketType>();

  onSubmit(title: string, textarea: string) {
    this.add.emit({title: title, text: textarea})
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
