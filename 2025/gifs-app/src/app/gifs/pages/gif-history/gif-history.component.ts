import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '@gifs/services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-gif-history',
  standalone: true,
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {
  gifService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'])),
  );

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });

}
