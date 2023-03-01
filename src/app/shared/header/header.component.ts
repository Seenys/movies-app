import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngOnInit(): void {}

  constructor(private _router: Router) {}

  navigateToMovies() {
    this._router.navigate(['movies']);
  }

  navigateToHome() {
    this._router.navigate(['']);
  }

  navigateToTvShows() {
    this._router.navigate(['tv-shows']);
  }

  navigateToGenres() {
    this._router.navigate(['genres']);
  }
}
