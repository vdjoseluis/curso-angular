import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import type { Character } from '../../../interfaces/character.interface';
import { CharacterAddComponent } from '../../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styles: ``
})
export class DragonballSuperPageComponent {
  dragonballService = inject(DragonballService);

}
