import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../service/movies.service';
import { MarvelsMovies } from '../../models/marvels-movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {
  public marvelMovies: MarvelsMovies[] = [];

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    this.marvelMovies = this.moviesService.getMarvelMovies();
    return;
  }
}
