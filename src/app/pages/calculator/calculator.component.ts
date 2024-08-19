import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import { ButtonTypeEnum } from './types/button-type.enum';
import {DisplayComponent} from "./components/display/display.component";
import {ButtonActionComponent} from "./components/button-action/button-action.component";
import {ButtonOperationComponent} from "./components/button-operation/button-operation.component";
import {ButtonNumericComponent} from "./components/button-numeric/button-numeric.component";
import {ButtonOfTypePipe} from "./pipes/button-of-type.pipe";
import {CommonModule} from "@angular/common";
import {AppNavbarComponent} from "../home/components/app-navbar/app-navbar.component";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    DisplayComponent,
    ButtonActionComponent,
    ButtonOperationComponent,
    ButtonNumericComponent,
    ButtonOfTypePipe,
    CommonModule,
    AppNavbarComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{
  animateLines = false;
  readonly ButtonTypeEnum = ButtonTypeEnum;

  constructor(public state: DataService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animateLines = true;
    }, 100);
  }
}
