import {
  Component,
  contentChild,
  ElementRef,
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
    '(click)': 'onClick()',
  },
})
export class Control {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Click in control');
  // }
  // @ContentChild("input") private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  label = input.required<string>();
  //private el = inject(ElementRef);

  onClick() {
    console.log('Click in control');
    console.log(this.control());
  }
}
