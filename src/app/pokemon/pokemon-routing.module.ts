import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonComponent } from './pokemon.component';
import { AppComponent } from '../app.component'

const pokemonRoutes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'detail/:id', component: PokemonDetailComponent }
  
];



@NgModule({
  imports: [RouterModule.forRoot(pokemonRoutes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
