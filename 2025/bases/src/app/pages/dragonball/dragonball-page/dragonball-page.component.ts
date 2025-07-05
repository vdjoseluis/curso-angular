import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  //selector: 'app-dragonball-page',
  standalone: true,
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      this.resetFields();
      return
    };
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update(current => [...current, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  /* powerClasses = computed(() => {
    return {
      'text-danger' : this.characters().some(character => character.power < 8000),
    } // PARA USAR CON NGCLASS
  }); */

}
