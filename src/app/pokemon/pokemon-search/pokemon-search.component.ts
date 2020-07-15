import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
