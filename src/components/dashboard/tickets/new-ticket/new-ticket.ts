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

  titleInput = '';
  textarea = '';

  onSubmit() {
    this.add.emit({ title: this.titleInput, text: this.textarea });
    this.form?.nativeElement.reset();
    this.titleInput = "";
    this.textarea = "";
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
