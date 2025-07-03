import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  /* selector: 'app-hero-page', */
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
})
export default class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.update((current) => current = 'Spiderman');
    this.age.update((current) => current = 22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
