import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import type { Gif } from '@gifs/interfaces/gif.interace';

@Component({
  selector: 'gif-list',
  standalone: true,
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styles: ``
})
export class GifListComponent {
  gifUrls = input.required<Gif[]>();
}
