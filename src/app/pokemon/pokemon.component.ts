import { Component, OnInit } from '@angular/core';
import { Card } from '../mock-array';


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
  
  constructor() { }

  ngOnInit(): void {
  }

}