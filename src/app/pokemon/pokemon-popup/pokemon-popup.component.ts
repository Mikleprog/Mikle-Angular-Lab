import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-popup',
  templateUrl: './pokemon-popup.component.html',
  styleUrls: ['./pokemon-popup.component.css']
})
export class PokemonPopupComponent implements OnInit {

  constructor(
    private router: Router,
  ) { 

  }

  ngOnInit(): void {
  }

  close(): void{
    this.router.navigate([{ outlets: { messages: null }}]);
  }
}
