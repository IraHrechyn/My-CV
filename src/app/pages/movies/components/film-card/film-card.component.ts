import {Component, Input, Output, EventEmitter } from '@angular/core';
import {CardData} from "../../types/card-data.interface";

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() movie!: CardData;
  @Output() filmClicked: EventEmitter<any> = new EventEmitter();

  onFilmClick() {
    this.filmClicked.emit(this.movie);
  }
}
