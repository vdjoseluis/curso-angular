import { Component, input, Input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  standalone: true,
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
characters = input.required<Character[]>();
listName = input.required<string>();
}
