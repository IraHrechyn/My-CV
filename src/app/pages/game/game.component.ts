import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameBoarderComponent} from "./components/game-boarder/game-boarder.component";
import {GeneralModel} from "./types/general-model";
import {SnakeService} from "./services/snake.service";
import {AppNavbarComponent} from "../home/components/app-navbar/app-navbar.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    GameBoarderComponent,
    AppNavbarComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent  {

}
