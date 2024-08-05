import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  constructor(public state: DataService) {}
}
