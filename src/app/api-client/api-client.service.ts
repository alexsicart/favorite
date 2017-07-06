import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Movie } from '../models/movie';

@Injectable()
export class ApiClientService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getDiscoverMovies () : Promise<Movie[]> {
    return this.http
      .get('http://movied.herokuapp.com/discover')
      .toPromise()
      .then(response => response.json())
      .then(result => result.map(movieData => new Movie(movieData)));
  }

  getMoviePairs () : Promise<Array<Movie[]>> {
    return this.getDiscoverMovies()
    .then(movies => {
      return movies
      .reduce((accum: any, movie: any, index: any, array: any) => {
        if(index % 2 !== 0) return accum;
        return accum.concat([[movie, array[index+1]]]);
      }, []);
    });
  }

}
