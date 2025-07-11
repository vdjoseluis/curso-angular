import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {
  searchValue = output<string>();
  placeholder = input('Buscar...');
  debounceTime = input(1000);

  initialValue = input<string>();
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();
    const timeout = setTimeout(() => {
      this.searchValue.emit(value);
    }, this.debounceTime());

    onCleanup(() => clearTimeout(timeout));
  });

}
