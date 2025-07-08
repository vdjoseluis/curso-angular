import { Component } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  onSearch(value:string): void {
    console.log('Searching by capital:', value);
  }

}
