import { Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  }
  /* styles: `
  .is-command {
    @apply bg-indigo-700 bg-opacity-20;
  }
  ` */
})
export class CalculatorComponent {

  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  public resultText = computed(()=> this.calculatorService.resultText());
  public subResultText = computed(()=> this.calculatorService.subResultText());
  public lastOperator = computed(()=> this.calculatorService.lastOperator());

  handleClick(key: string) {
    this.calculatorService.constructNumber(key);
  }

  //@HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Delete: 'C',
      Enter: '=',
      x: '*',
      '/': '÷',
    }

    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;
    this.handleClick(keyValue);

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    });
  }
}
