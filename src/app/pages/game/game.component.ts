import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameBoarderComponent} from "./components/game-boarder/game-boarder.component";
import {GeneralModel} from "./types/general-model";
import {SnakeService} from "./services/snake.service";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    GameBoarderComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent  {

}
