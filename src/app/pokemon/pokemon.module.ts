import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { PokemonComponent } from './pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { HighlightDirective } from '../highlight.directive';
import { ProviderAst } from '@angular/compiler';
import { PokemonService } from './pokemon.service';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonPopupComponent } from './pokemon-popup/pokemon-popup.component';
import { ExitEditGuard } from './exit.edit.guard'

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonCardComponent, 
    PokemonSearchComponent, 
    HighlightDirective, 
    PokemonDetailComponent, PokemonEditComponent, PokemonPopupComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PokemonRoutingModule
  ],
  exports: [PokemonComponent],
  providers: [PokemonService, ExitEditGuard]
})
export class PokemonModule { }