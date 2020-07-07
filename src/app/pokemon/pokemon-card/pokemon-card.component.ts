import { Component, OnInit } from '@angular/core';
import { cards} from '../../testarray'

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  pokemons=cards;
  condition: boolean=true;
  
  CatchOrRelease: string="Status";
  status($event : any) : void {
  
    if(this.condition) {
      
      this.CatchOrRelease="is caught";
      console.log("Pokemon is caught");
    } else {
        this.CatchOrRelease="is released";
        console.log("pokemon is released");
      }  

    this.condition=!this.condition;
  }
  /*increase($event : any) : void {
    this.count++;
    console.log($event);
  */
  constructor() { }

  ngOnInit(): void {
  }

}
