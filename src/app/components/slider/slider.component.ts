import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    // animation triggers go here
    trigger('slideFade', [
      // ...FadeIn
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('300ms ease-in', style({ opacity: 1 }))),
      transition(':leave', animate('300ms ease-out', style({ opacity: 0 })))
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 0;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
    }, 5000);
  }
}
