import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {AppApiService} from "../../services/app-api.service";
import {CommonModule} from "@angular/common";
import {FilmCardComponent} from "../film-card/film-card.component";

@Component({
  selector: 'movie-list',
  standalone: true,
  imports: [CommonModule, FilmCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent  implements OnInit{

  constructor(public state: DataService, private apiService: AppApiService){
  }

  async ngOnInit() {
    await this.loadMoviesData();
  }

  async loadMoviesData(): Promise<void> {
    try {
      this.state.movieData = await this.apiService.fetchMovies();
    } catch (error) {
      console.error('Error loading carousel data:', error);
    }
  }

  onFilmClick(movie: any) {
    this.state.selectedMovie = movie;
    this.state.modal = true;
  }
}
