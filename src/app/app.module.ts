import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteMovieComponent } from './favorite-movie/favorite-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    FavoriteMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
