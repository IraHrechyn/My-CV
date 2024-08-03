import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './../../styles/button-style.css']
})
export class ContactComponent implements AfterViewInit {

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

    const formContainer = this.el.nativeElement.querySelector('.form-container');
    observer.observe(formContainer);
  }
}
