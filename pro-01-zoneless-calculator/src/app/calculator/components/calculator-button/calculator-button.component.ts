import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calculator-button.component.css'],
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  },
  //encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {

  isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  /* @HostBinding('class.is-command') get commandStyle() {
    return this.isCommand();
  } */

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
