import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JvdSideMenuComponent, TitleColor } from 'jvd-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, JvdSideMenuComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jvd-testbed-app';

  TitleColor = TitleColor;

  isAuthenticated = signal(true);

}
