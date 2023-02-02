import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filmes';

  filmes:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.listFilmes();
  }


  listFilmes(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=d9d5478448f569ffcf97e5db8c9fdee8';
    this.http.get<any>(url).subscribe(response => {
      this.filmes = response.results;
    });
  }
}
