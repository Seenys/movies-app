import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private _http: HttpClient) {}
  private _url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=bfbcc2692b3d51d62d7519932a1b692d';
  getMovies() {
    return this._http.get(this._url).pipe((res) => res);
  }
}
