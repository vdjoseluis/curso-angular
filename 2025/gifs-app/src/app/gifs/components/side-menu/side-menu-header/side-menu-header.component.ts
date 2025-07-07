import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'gifs-side-menu-header',
  standalone: true,
  imports: [],
  templateUrl: './side-menu-header.component.html',
  styles: ``
})
export class SideMenuHeaderComponent {
  envs = environment;
}
