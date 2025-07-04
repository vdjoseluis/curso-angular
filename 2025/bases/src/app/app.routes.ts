import { Routes } from '@angular/router';
import HeroPageComponent from './pages/hero/hero-page/hero-page.component';
import { CounterPageComponent } from './pages/counter/counter-page/counter-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
