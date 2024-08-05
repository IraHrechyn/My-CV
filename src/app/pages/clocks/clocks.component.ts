import {Component, OnInit} from '@angular/core';
import {ClockService} from "./services/clock.service";
import {DigitalClockComponent} from "./components/digital-clock/digital-clock.component";
import {AnalogClockComponent} from "./components/analog-clock/analog-clock.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-clocks',
  standalone: true,
  imports: [
    DigitalClockComponent,
    AnalogClockComponent,
    NgClass
  ],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.css'
})
export class ClocksComponent implements OnInit{
  animateLines = false;

  constructor(public dateService: ClockService) {}

  ngOnInit() {
    this.dateService.startClock();
    setTimeout(() => {
      this.animateLines = true;
    }, 100);
  }
}
