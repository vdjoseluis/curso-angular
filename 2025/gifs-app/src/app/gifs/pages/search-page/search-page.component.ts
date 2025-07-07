import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '@gifs/components/gif-list/gif-list.component';
import type { Gif } from '@gifs/interfaces/gif.interace';
import { GifsService } from '@gifs/services/gifs.service';

/* {
  'goku': [gif1, gif2,gif3],
  'vegeta': [gif1,gif2, gif3],
  'trunks': [gif1, gif2, gif3],
}
Record<string, Gif[]>;
 */

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
