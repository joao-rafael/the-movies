import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { IMovieCard } from '../../interfaces/movie';
import { Router } from '@angular/router';
/**
 * @description
 * Renders a card with movie data
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('500ms', style({ opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({ opacity: 0}))
      ])
    ])
  ]
})
export class MovieCardComponent {

  @Input() context: IMovieCard = {
    title: 'Somewhere over the rainbow',
    imgAssetUrl: 'otherplace',
    isOnWatchList: false,
    route: '/teste'
  }

  isMouseOver: boolean = false;

  constructor(private router: Router) {

  }

  onClick() {
    this.router.navigateByUrl('/details');
  }
}
