import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AnalogClockComponent} from "./pages/clocks/components/analog-clock/analog-clock.component";
import {DigitalClockComponent} from "./pages/clocks/components/digital-clock/digital-clock.component";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-cv';
}
