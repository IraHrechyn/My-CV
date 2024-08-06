import {Component, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {SnakeService} from "../../services/snake.service";
import {GeneralModel} from "../../types/general-model";
import {TimerService} from "../../services/timer.service";

@Component({
  selector: 'app-start-modal',
  standalone: true,
  imports: [],
  templateUrl: './start-modal.component.html',
  styleUrl: './start-modal.component.css'
})
export class StartModalComponent  implements OnDestroy {
  private timerSubscription: Subscription | undefined;

  constructor(
    public m: GeneralModel,
    private snake: SnakeService,
    private timer: TimerService
  ) {}

  startGame(): void {
    this.snake.listenToInputs();
    this.startTimer();
    this.m.modalVisible = false;
  }

  private startTimer(): void {
    if (!this.m.timerSubscription) {
      this.m.timerSubscription = interval(1000).subscribe(():void => {
        if (this.m.gameOver !== undefined) this.timer.updateTime();
      });
    }
  }
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }
}
