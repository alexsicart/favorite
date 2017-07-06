import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './api-client/api-client.service';
import { Movie } from './models/Movie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiClientService],
})
export class AppComponent implements OnInit {
  title : String;
  apiClientService: ApiClientService;
  pairs: Array<Movie[]> = [];
  index: any;
  favorites: Movie[] = [];

  constructor(apiClientService:ApiClientService) {
    this.title = 'Bananas';
    this.apiClientService = apiClientService;
  }

  ngOnInit() {
    this.apiClientService.getMoviePairs()
    .then(movies => {
      this.index = 0;
      this.pairs = movies;
    });
  }

  movieSelected(side: any){
    this.favorites.push(this.pairs[this.index][side])
    this.index++;
  }
}
