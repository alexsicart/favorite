export class Movie {
  id: Number;
  posterPath: String;
  title: String;

  constructor(data: any) {
    this.id = data.id;
    this.posterPath = data.poster_path;
    this.title = data.title;
  }

  posterURL() : String {
    return 'https://image.tmdb.org/t/p/w300/' + this.posterPath;
  }
}
