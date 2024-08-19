import {Component, ElementRef, AfterViewInit, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css',  './../../styles/button-style.css']
})
export class AboutMeComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

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

    const aboutMeSection = this.el.nativeElement.querySelector('.about-me-container');
    const responseSection = this.el.nativeElement.querySelector('.response-container');
    const skillsSection = this.el.nativeElement.querySelector('.skills-section');

    observer.observe(aboutMeSection);
    observer.observe(responseSection);
    observer.observe(skillsSection);
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Hrechyn_CV.pdf';
    link.click();
  }

}
