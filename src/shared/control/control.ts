import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class Control {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Click in control');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Click in control');
    console.log(this.el);
  }
}
