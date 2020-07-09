import { Component, OnInit } from '@angular/core';
import { cards} from '../../testarray';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = cards

  constructor() { }

  ngOnInit(): void {
  }

}
