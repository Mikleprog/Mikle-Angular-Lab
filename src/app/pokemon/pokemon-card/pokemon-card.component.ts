import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { cards, Card} from '../../testarray'


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonCardComponent implements OnInit {
 
  pokemons=cards;
 
 @Output() saveStatus = new EventEmitter<any>();
  status(pokemon: Card): void{
    
     this.saveStatus.emit(pokemon);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
