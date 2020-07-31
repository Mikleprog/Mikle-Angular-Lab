import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { Card }  from '../../mock-array';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
 
  pokemons:Card[]=[];
  name: string;
  id: number;
  selectedPokemon: Card;
 
 

  constructor(private pokemonService: PokemonService) { }
 
  ngOnInit(){
    this.getPokemons();
  
  }
  
  getPokemons(): void {
    this.pokemonService.getPokemons()
    .subscribe(pokemons =>this.pokemons = pokemons)
  }

  filter(name:string):void {
    this.pokemons= this.pokemonService.filterByName(name);
 }
  
  changeStatus(pokemon: Card): void {
    this.pokemonService.changeStatus(pokemon);
  }

}
 