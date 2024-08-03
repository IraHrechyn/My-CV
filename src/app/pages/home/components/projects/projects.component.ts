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
    // Options for the IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Callback function for the IntersectionObserver
    const onSectionVisible = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
          observer.unobserve(entry.target);
        }
      });
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(onSectionVisible, observerOptions);

    // Select the first project and add the 'first' class
    this.firstProject = this.el.nativeElement.querySelector('.project');
    if (this.firstProject) {
      this.renderer.addClass(this.firstProject, 'first');
    }

    // Observe the projects container for intersection changes
    const projectsContainer = this.el.nativeElement.querySelector('.projects-container');
    if (projectsContainer) {
      observer.observe(projectsContainer);
    }

    // Animate the first project after a short delay
    setTimeout(() => {
      if (this.firstProject) {
        setTimeout(() => {
          this.renderer.removeClass(this.firstProject, 'first');
          this.renderer.addClass(this.firstProject, 'active');
        }, 1000);
      }
    }, 100);
  }

  // Move to the next project
  next() {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.direction = 'right';
    this.updateVisibleProjects();
  }

  // Move to the previous project
  prev() {
    this.prevIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.direction = 'left';
    this.updateVisibleProjects();
  }

  // Update the visibility of projects based on the direction
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

      // Remove animation classes and update 'active' class after animation duration
      setTimeout(() => {
        this.renderer.removeClass(prevProject, 'exit-left');
        this.renderer.removeClass(prevProject, 'exit-right1');
        this.renderer.removeClass(currentProject, 'enter-left');
        this.renderer.removeClass(currentProject, 'enter-right');
        this.renderer.removeClass(prevProject, 'active');
        this.renderer.addClass(currentProject, 'active');
      }, 1000); // Ensure this matches your CSS animation duration
    }
  }

  // Handle scroll events to add/remove animation class
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
