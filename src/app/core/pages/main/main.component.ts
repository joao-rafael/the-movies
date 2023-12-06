import { Component } from '@angular/core';
import { movieData } from 'src/app/shared/data/movies.data';
import { IMovieCard, IMovieData } from 'src/app/shared/interfaces/movie';

/**
 * @description
 * Nain page with movie listing capabilities
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  /**
   * MovieList
   * @type {IMovieCard[]}
   * @remark 
   * contains only the necessary movie card data
   */
  movieCardList: IMovieCard[] = [];

  constructor() {
    this.movieCardList = this.getCardData();
  }

  /**
   * Gets card data from the movie data array
   * @returns an array containing card data
   */
  getCardData(): IMovieCard[] {
    return movieData.map((movie: IMovieData) => {
      const { title, imgAssetUrl, isOnWatchList, route } = movie;
      return { title, imgAssetUrl, isOnWatchList, route };
    });
  }
}
