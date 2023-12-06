/**
 * @description
 * Complete movie data to be shown on details page
 */
export interface IMovieData {
    title: string;
    description: string;
    rating: number;
    duration: string;
    genres: string[];
    release: string;
    trailerLink: string;
    imgAssetUrl: string;
    isOnWatchList: boolean;
    route: string;
}

/**
 * @description
 * Movie card data for movie card list rendering
 */
export interface IMovieCard {
    title: string;
    imgAssetUrl: string;
    isOnWatchList: boolean;
    route: string;
}

