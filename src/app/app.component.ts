import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filmes';

  movies: any;
  movieById: any = null;
  openModalId = false;
  loading = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listMovies();
  }


  listMovies() {
    const { POPULAR_MOVIES, KEY, LANGUAGE } = environment;

    const apiFilmesPopular = `${POPULAR_MOVIES}api_key=${KEY}&language=${LANGUAGE}`;
    this.loading = true;
    this.http.get<any>(apiFilmesPopular).subscribe(
      response => {
        this.loading = false;
        this.movies = response.results.map((item: any) => {

          return {
            ...item,
            vote_average: item.vote_average.toFixed(1)
          }
        });

      },
      error => {
        this.loading = false;
        console.log('------ Houve um erro:', error?.message ? error.message : error);
      });
  }

  detailsByMovie(idFilme: any) {
    const { DETAILS_MOVIE, KEY, LANGUAGE } = environment;
    const apiMovieCompleted = `${DETAILS_MOVIE}/${idFilme}?api_key=${KEY}&language=${LANGUAGE}`;

    this.loading = true;
    this.http.get<any>(apiMovieCompleted).subscribe(
      movieFind => {
        this.loading = false;
        this.movieById = {
          ...movieFind,
          vote_average: movieFind.vote_average.toFixed(1)
        }
        this.openModalId = true;
      },
      error => {
        this.loading = false;
        console.log('------ Houve um erro:', error?.message ? error.message : error);
      });
  }
}
