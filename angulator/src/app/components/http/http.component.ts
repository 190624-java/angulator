import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  title: string = 'HTTP';
  documentation: string = 'https://angular.io/guide/http';

  public pokemon: Pokemon = new Pokemon(5, '');

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonInformation();
  }

  getPokemonInformation():void{
    this.pokemonService.fetchPokemonInformation(this.pokemon.id)
    .subscribe(
      pokemon => this.pokemon = pokemon,
      error => console.log(`Error: ${error}`)
    );
  }

}
