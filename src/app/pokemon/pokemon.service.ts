import { CARDS, Card } from '../mock-array'
import { Observable, of } from 'rxjs';


export class PokemonService { 
  private data:Card[]= CARDS; // 

  getPokemons(): Observable <Card[]> {
    return of (CARDS);
  }

  filterByName(name:string) {
    return this.data.filter(item=>item.name===name);
  }

  getById(id:number) {
    return of (CARDS.find(item=>item.id===id));
  } 
  

  changeStatus(pokemon:Card){
    
    if (pokemon.catchOrRelease=="Status"|| pokemon.catchOrRelease=="is released") {
      
      pokemon.catchOrRelease=`is caught`;
      console.log(`${pokemon.name} is caught`);
      return;
    } else  {
        pokemon.catchOrRelease=`is released`;
        console.log(`${pokemon.name} is released`);
    } 
  }
}

  



