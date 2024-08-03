import {Component, HostListener, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MenuComponent} from "./components/menu/menu.component";
import {HeaderComponent} from "./components/header/header.component";
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProjectsComponent} from "./components/projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent,
    HeaderComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about-me', 'projects', 'contact'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const title = section.querySelector('.title');
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;

        if (isInViewport) title?.classList.add('animate-lines');
        else title?.classList.remove('animate-lines');
      }
    });
  }
}
