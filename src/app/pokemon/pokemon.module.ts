import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

//import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { HighlightDirective } from '../highlight.directive';


@NgModule({
  declarations: [PokemonComponent, PokemonListComponent, PokemonCardComponent, PokemonSearchComponent, HighlightDirective],
  imports: [
    CommonModule,
   // PokemonRoutingModule,
    BrowserModule,
    FormsModule
  ],
  exports: [PokemonComponent]
})
export class PokemonModule { }