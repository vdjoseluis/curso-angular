import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()    // Se puede poner dentro de () algun nombre
  public characterList: Character[] = [];  //valor por default si se pasa vacio

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
