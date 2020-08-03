import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonPopupComponent} from './pokemon-popup/pokemon-popup.component';
import { ExitEditGuard } from './exit.edit.guard';

import { AppComponent } from '../app.component';

const pokemonRoutes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: 'pokemon/:id/edit', component: PokemonEditComponent, canDeactivate: [ExitEditGuard]},
  { path: 'messages', component: PokemonPopupComponent, outlet: 'messages'}
  
];



@NgModule({
  imports: [RouterModule.forRoot(pokemonRoutes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
