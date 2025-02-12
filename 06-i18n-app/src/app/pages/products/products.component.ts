import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import LanguageSelectorComponent from '../../components/language-selector/language-selector.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, LanguageSelectorComponent],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent { }
