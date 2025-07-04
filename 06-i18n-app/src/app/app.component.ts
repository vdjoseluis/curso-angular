import { Component, effect, Inject, inject, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { LanguageService, SERVER_LANG_TOKEN } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'i18n-app';

  cookie = inject(SsrCookieService);
  languageService = inject(LanguageService);

  constructor(
    @Optional()
    @Inject(SERVER_LANG_TOKEN)
<<<<<<< HEAD
    langServer: string
  ) {
    const lang =
      langServer ??
      (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');

=======
    langServer: string) {
     const lang= langServer ?? (this.cookie.check('lang') ? this.cookie.get('lang') : 'en');
>>>>>>> 78799ae24ae5bb947d1c7ae13f47a049a87747b9
    this.languageService.changeLang(lang);
  }
}
