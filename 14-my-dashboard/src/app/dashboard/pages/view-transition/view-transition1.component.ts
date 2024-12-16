import { Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  standalone: true,
  selector: 'app-view-transition-1',
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1"></app-title>
    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/250/200/300" alt="Picsum" width="200" height="300" style="view-transition-name: hero1"/>
      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2"></div>
    </section>
  `
})
export default class ViewTransition1Component {

}
