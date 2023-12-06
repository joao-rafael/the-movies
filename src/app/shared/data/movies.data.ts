import { IMovieData } from "../interfaces/movie";

export const movieData: IMovieData[] = [
    {
      title: 'Tenet',
      description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      rating: 7.8,
      duration: '2h 30min',
      genres: ['Action', 'Sci-Fi'],
      release: '3 September 2020',
      trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
      imgAssetUrl: 'assets/images/tenet.png',
      isOnWatchList: false,
      route: '/tenet'
    },
    {
      title: 'Spider-Man: Into the Spider-Verse',
      description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      rating: 8.4,
      duration: '1h 57min',
      genres: ['Action', 'Animation', 'Adventure'],
      release: '14 December 2018',
      trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
      imgAssetUrl: 'assets/images/spiderman.png',
      isOnWatchList: false,
      route: '/spider'
    },
    {
      title: 'Knives Out',
      description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
      rating: 7.9,
      duration: '2h 10min',
      genres: ['Comedy', 'Crime', 'Drama'],
      release: '27 November 2019',
      trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
      imgAssetUrl: 'assets/images/knives-out.png',
      isOnWatchList: false,
      route: '/knives'
    },
    {
      title: 'Guardians of the Galaxy',
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      rating: 8.0,
      duration: '2h 1min',
      genres: ['Action', 'Adventure', 'Comedy'],
      release: '1 August 2014',
      trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
      imgAssetUrl: 'assets/images/guardians.png',
      isOnWatchList: false,
      route: '/guardians'
    },
    {
      title: 'Avengers: Age of Ultron',
      description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: '2h 21min',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      release: '1 May 2015',
      trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
      imgAssetUrl: 'assets/images/avengers.png',
      isOnWatchList: false,
      route: '/avengers'
    }
  ];