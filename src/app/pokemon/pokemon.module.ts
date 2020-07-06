import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonTextComponent } from './pokemon-text/pokemon-text.component';



@NgModule({
  declarations: [PokemonCardComponent, PokemonSearchComponent, PokemonListComponent, PokemonPageComponent, PokemonTextComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
