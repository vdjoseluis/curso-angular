import { Injectable, signal, effect } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  if (characters) {
    try {
      return JSON.parse(characters) as Character[];
    } catch (error) {
      console.error('Error parsing characters from localStorage:', error);
      return [];
    }
  }
  return [];
};

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update(current => [...current, newCharacter]);
  }
}
