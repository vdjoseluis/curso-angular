import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {
  searchValue = output<string>();
  placeholder = input('Buscar...');

  onSearch(value: string): void {
    this.searchValue.emit(value);
  }
}
