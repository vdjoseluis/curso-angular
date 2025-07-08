import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifsService } from '@gifs/services/gifs.service';
import { ScrollStateService } from '@shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  standalone: true,
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
  gifService = inject(GifsService);
  scrollStateService = inject(ScrollStateService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollDiv;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
}
