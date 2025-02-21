/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-jvd-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './jvd-side-menu.component.html',
  styles: ``
})
export class JvdSideMenuComponent {
  isAuthenticated = input(false);

  title = input('JVD');
  subtitle = input('Corp');

  titleColor = input<TitleColor>(TitleColor.purple);

  onSignOut = output();
  onSignIn = output();
}
