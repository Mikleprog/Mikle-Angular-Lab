import { Component, OnInit} from '@angular/core';
import { cards, Card} from '../../testarray'


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemons=cards;
  condition: boolean=true;
 // @Input() pokemon: any;
  
  catchOrRelease: string="Status";
  status($event : any, pokemon:Card) : void {
  
    if(this.condition) {
      
      pokemon.catchOrRelease=`is caught`;
      console.log(`${pokemon.name}is caught`);
    } else {
        pokemon.catchOrRelease=`is released`;
        console.log(`${pokemon.name} is released`);
      }  

    this.condition=!this.condition;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
