import { Component, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  standalone: true,
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      this.resetFields();
      return
    };
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000), // Random ID for simplicity ---- PODRIA VENIR DEL BACKEND
      name: this.name(),
      power: this.power()
    }
    this.newCharacter.emit(newCharacter);
    
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
