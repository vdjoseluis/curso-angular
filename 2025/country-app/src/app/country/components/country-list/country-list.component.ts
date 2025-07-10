import { Component, input } from '@angular/core';
import type { Country } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-list.component.html',
  styles: ``
})
export class CountryListComponent {
  countries = input.required<Country[]>();

  errorMessage = input<string | null | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
