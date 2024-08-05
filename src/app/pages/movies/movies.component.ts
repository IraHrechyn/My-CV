import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {ModalComponent} from "./components/modal/modal.component";
import {CommonModule} from "@angular/common";
import {DataService} from "./services/data.service";
import {ScrollTopModule} from "primeng/scrolltop";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MovieListComponent,
    CarouselComponent,
    PaginationComponent,
    ModalComponent,
    ScrollTopModule
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(public state: DataService){}
}
