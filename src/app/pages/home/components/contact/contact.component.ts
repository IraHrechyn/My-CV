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

  async submitForm(event: Event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми

    const form = event.target as HTMLFormElement;
    const statusMessage = this.el.nativeElement.querySelector('#status-message');
    const formStatus = this.el.nativeElement.querySelector('#form-status');

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        statusMessage.textContent = "Thank you! Your message has been sent.";
        form.reset(); // Очищення форми
      } else {
        statusMessage.textContent = "Oops! There was a problem submitting your form.";
      }
    } catch (error) {
      statusMessage.textContent = "Oops! There was a problem submitting your form.";
    }

    // Показуємо статус після відправки
    formStatus.style.display = "block";
  }
}
