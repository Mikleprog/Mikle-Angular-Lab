import { Component, OnInit } from '@angular/core';
import { Card } from '../testarray';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  conditionForViev: boolean=true;

  toggle(){
    this.conditionForViev=!this.conditionForViev;
  }
  
  changeStatus(pokemon:Card){
    //console.log(pokemon.name);
    if(pokemon.catchOrRelease=="Status"|| pokemon.catchOrRelease=="is released") {
      
      pokemon.catchOrRelease=`is caught`;
      console.log(`${pokemon.name} is caught`);
      return;
    } else  {
        pokemon.catchOrRelease=`is released`;
        console.log(`${pokemon.name} is released`);
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }

}