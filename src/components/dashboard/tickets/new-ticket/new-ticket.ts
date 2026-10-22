import { Component, ElementRef, ViewChild } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { Control } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  onSubmit(tittle: string, textarea: string) {
    console.log(tittle);
    console.log(textarea);

    this.form?.nativeElement.reset();
  }
}
