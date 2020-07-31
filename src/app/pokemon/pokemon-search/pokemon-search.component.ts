import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
  
})
export class PokemonSearchComponent implements OnInit {

  pokemonName: string;
 
  @Output() savePokemonName = new EventEmitter<any>();
 
  search(): void{

    this.savePokemonName.emit(this.pokemonName);

  };

  constructor() { } 

  ngOnInit(): void {
   
  }
  
  
  
}
