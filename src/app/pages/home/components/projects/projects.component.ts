import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {Project} from "./model/project.interface";
import {PROJECTS} from "./model/projects-data";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = PROJECTS;
  currentIndex = 0;
  direction: 'left' | 'right' = 'right';
  prevIndex!: number;
  firstProject!: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const onSectionVisible = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onSectionVisible, observerOptions);

    this.firstProject = this.el.nativeElement.querySelector('.project');
    if (this.firstProject) {
      this.renderer.addClass(this.firstProject, 'first');
    }

    const projectsContainer = this.el.nativeElement.querySelector('.projects-container');
    if (projectsContainer) {
      observer.observe(projectsContainer);
    }

    setTimeout(() => {
      if (this.firstProject) {
        setTimeout(() => {
          this.renderer.removeClass(this.firstProject, 'first');
          this.renderer.addClass(this.firstProject, 'active');
        }, 1000);
      }
    }, 100);
  }

  next() {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.direction = 'right';
    this.updateVisibleProjects();
  }

  prev() {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.direction = 'left';
    this.updateVisibleProjects();
  }

  updateVisibleProjects() {
    const prevProject = this.el.nativeElement.querySelectorAll('.project')[this.prevIndex];
    const currentProject = this.el.nativeElement.querySelectorAll('.project')[this.currentIndex];

    if (prevProject && currentProject) {
      if (this.direction === 'right') {
        this.renderer.removeClass(currentProject, 'enter-left');
        this.renderer.addClass(currentProject, 'enter-right');
        this.renderer.addClass(prevProject, 'exit-left');
      } else if (this.direction === 'left') {
        this.renderer.removeClass(prevProject, 'exit-left');
        this.renderer.removeClass(currentProject, 'enter-right');
        this.renderer.removeClass(currentProject, 'enter-left');
        this.renderer.addClass(currentProject, 'enter-left');
        this.renderer.addClass(prevProject, 'exit-right1');
      }

      setTimeout(() => {
        this.renderer.removeClass(prevProject, 'exit-left');
        this.renderer.removeClass(prevProject, 'exit-right1');
        this.renderer.removeClass(currentProject, 'enter-left');
        this.renderer.removeClass(currentProject, 'enter-right');
        this.renderer.removeClass(prevProject, 'active');
        this.renderer.addClass(currentProject, 'active');
      }, 1000);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const section = document.getElementById('projects');
    if (section) {
      const title = section.querySelector('.title');
      const rect = section.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.top <= window.innerHeight;

      if (isInViewport) {
        title?.classList.add('animate-lines');
      } else {
        title?.classList.remove('animate-lines');
      }
    }
  }
}
