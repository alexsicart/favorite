import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: Movie;

  @Output()
  moviePicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  picking() {
    this.moviePicked.emit();
  }

}
