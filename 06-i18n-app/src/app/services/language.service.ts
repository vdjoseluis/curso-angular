<<<<<<< HEAD
import { effect, inject, Injectable, InjectionToken, signal } from '@angular/core';
=======
import { inject, Injectable, InjectionToken, signal } from '@angular/core';
>>>>>>> 78799ae24ae5bb947d1c7ae13f47a049a87747b9
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN = new InjectionToken<string>('SERVER_LANG_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  cookie = inject(SsrCookieService);
  translate = inject(TranslateService);

  langServer = inject(SERVER_LANG_TOKEN, { optional: true });
<<<<<<< HEAD

  currentLang = signal(this.cookie.get('lang') ?? 'en');
=======
  currentLang = signal(this.langServer ?? 'en');
>>>>>>> 78799ae24ae5bb947d1c7ae13f47a049a87747b9

  changeLang(lang: string) {
    this.cookie.set('lang', lang);
    console.log({ lang });
    this.translate.setDefaultLang(lang);

<<<<<<< HEAD
    this.translate.setDefaultLang(lang);

=======
>>>>>>> 78799ae24ae5bb947d1c7ae13f47a049a87747b9
    this.translate.use(lang);
    this.currentLang.set(lang);
  }

}
