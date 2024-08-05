import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(public state:DataService){}

  closeModal() {
    this.state.selectedMovie = null;
    this.state.modal = false;
  }

  protected readonly Math = Math;
}

