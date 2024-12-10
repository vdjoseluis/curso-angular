import { Component, computed, signal } from '@angular/core';

@Component({
  standalone: false,

  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() ** 2);

  increaserBy(value: number): void {
    this.counter.update(current => current + value);
  }
}
