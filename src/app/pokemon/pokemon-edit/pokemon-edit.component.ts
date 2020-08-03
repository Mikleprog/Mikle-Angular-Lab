import { Component, OnInit} from '@angular/core';
import { Router } from'@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Card } from '../../mock-array';
import { ComponentCanDeactivate } from '../exit.edit.guard';
import {Observable} from "rxjs";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.css']
 
})


export class PokemonEditComponent implements  ComponentCanDeactivate  {
  saved: boolean = false;
  pokemon:Card;
  name: string;
  id: number;
  damage: number;
  date: string;
  pokemonName: string;
  pokemonDamage: number;
  pokemonDate: string;
 
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
    
  ) { }

 
  ngOnInit(){
    
    this.getById();
   }

  getById(): void{
     const id = + this.route.snapshot.paramMap.get('id');
     this.pokemonService.getById(id)
     .subscribe(pokemon => this.pokemon =pokemon);
  }

  saveEditPokemon(): void{
    this.pokemon.name = this.pokemonName;
    this.pokemon.damage=this.pokemonDamage;
    this.pokemon.date=this.pokemonDate;
    
    this.saved = true;
      
    this.router.navigate([{ outlets: { messages: [ 'messages' ] }}]);
   
  }

  cancel(): void{
    //this.location.back();
  }
  
  canDeactivate() : boolean | Observable<boolean>{
     
    if(!this.saved){
        return confirm("Are you shure?");
    }
    else{
      return true;
    }
  }
}
