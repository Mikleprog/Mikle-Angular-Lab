import { Component, OnInit} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Card } from '../../mock-array';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
 
})


export class PokemonDetailComponent implements OnInit {
  pokemon:Card;
  name: string;
  id: number;
 
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  filterByName(name: string){
    this.pokemonService.filterByName(name);
  }
  
     
  ngOnInit(){
    
    this.getById();
   }

  getById(): void{
     const id = + this.route.snapshot.paramMap.get('id');
     this.pokemonService.getById(id)
     .subscribe(pokemon => this.pokemon =pokemon);
  }

  changeStatus(pokemon: Card): void {
    this.pokemonService.changeStatus(pokemon);
  }

  
}

