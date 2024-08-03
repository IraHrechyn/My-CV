import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{

  closeMenu(): void {
    const menuToggle = document.getElementById('menu__toggle') as HTMLInputElement;
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  }
}
