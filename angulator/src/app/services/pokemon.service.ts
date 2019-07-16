import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PokemonService {

  error: any;

  constructor(private http: HttpClient) {
  }

  public fetchPokemonInformation(id:number): Observable<Pokemon>{
    return this.http
    .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse){
    return Observable.throw(error.statusText);
  }

}
