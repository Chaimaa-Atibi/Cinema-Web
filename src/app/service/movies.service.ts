import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../common/movie';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  host: string = 'http://localhost:8080/movies';

  findAllMovies() {
    return this.http.get<getResponseMovies>(this.host).pipe(
      map(response => response._embedded.movies)
    );
  }
  findMovieById(id) {
    return this.http.get<Movie>(`${this.host}/${id}`);
  }
}
interface getResponseMovies {
  _embedded : {
    movies: Movie[]
  }
}

