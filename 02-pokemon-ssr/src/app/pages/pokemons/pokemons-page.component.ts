import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list.component";
import PokemonListSkeletonComponent from "./ui/pokemon-list-skeleton/pokemon-list-skeleton.component";
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonListSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  private pokemonService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  //public isLoading = signal(true);
  // private appRef = inject(ApplicationRef);

  /* private $appState = this.appRef.isStable.subscribe((isStable) => {
    console.log({ isStable });
  }); */

  ngOnInit(): void {
    this.loadPokemons();
    // title
    // Meta-tags
    /* setTimeout(() => {
      this.isLoading.set(false);
    }, 1500); */
  }

  public loadPokemons(page = 0) {
    this.pokemonService.loadPage(page).subscribe(this.pokemons.set);
  }

  /* ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.$appState.unsubscribe();
  } */
}
