import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { Card } from '../../mock-array';
import { PokemonService } from '../pokemon.service';
import  { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonListComponent implements OnInit {
  
  pokemons:Card[]=[];
  name: string;
  id: number;
   

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ) { }
 
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
 