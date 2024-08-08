import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-app-navbar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgClass
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  isPanelVisible = false;

  togglePanel() {
    this.isPanelVisible = !this.isPanelVisible;
  }
}
