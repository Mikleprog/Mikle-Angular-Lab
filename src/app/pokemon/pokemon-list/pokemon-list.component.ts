import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { cards, Card} from '../../testarray';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  
  pokemons=cards;
 
  
  @Output() saveStatus = new EventEmitter<any>();
   status(pokemon: Card): void{
     
      this.saveStatus.emit(pokemon);
   }
 
   constructor() { }
 
   ngOnInit(): void {
   }
}
 