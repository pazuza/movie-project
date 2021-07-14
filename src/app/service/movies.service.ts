import { Injectable } from '@angular/core';

import movies from '../../assets/json/filmes.json';
import { MarvelsMovies } from '../models/marvels-movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMarvelMovies(): MarvelsMovies[] {
    return movies;
  }
}
