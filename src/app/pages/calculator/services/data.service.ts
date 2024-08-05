import { Injectable } from '@angular/core';
import {ValuesModel} from "../types/values.model";
import {ButtonsModel} from "../types/buttons.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  buttons: ButtonsModel;
  values: ValuesModel;

  constructor() {
    this.buttons = new ButtonsModel();
    this.values = new ValuesModel();
  }
}
