import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _moviesService: MoviesService) {}
  movies: any = [];

  ngOnInit(): void {
    this._moviesService.getMovies().subscribe(async (res: any) => {
      this.movies = await res.results;
    });
  }
}
