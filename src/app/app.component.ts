import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'portfolio';
  private typedInstance?: Typed;
  private gsapContext?: gsap.Context;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initTyped();
      this.initGsap();
      this.initAnimeInteractions();
    }, 100);
  }

  private initTyped(): void {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStringsAttr = typedElement.getAttribute('data-typed-items');
      if (typedStringsAttr) {
        const stringsArray = typedStringsAttr.split(',').map(s => s.trim());
        this.typedInstance = new Typed('.typed', {
          strings: stringsArray,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    }
  }

  private initGsap(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    this.gsapContext = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-eyebrow', { y: 18, duration: 0.55 })
        .from('.hero h2', { y: 40, duration: 0.8 }, '-=0.25')
        .from('.hero p', { y: 24, duration: 0.65 }, '-=0.45')
        .from('.hero-actions a, .hero .social-links a', {
          y: 16, duration: 0.45, stagger: 0.07
        }, '-=0.3');

      gsap.utils.toArray<HTMLElement>('.service-item, .portfolio-item, .resume-item').forEach((card) => {
        gsap.from(card, {
          y: 46, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 88%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.progress-bar').forEach((bar) => {
        const value = Number(bar.getAttribute('aria-valuenow') ?? 0);
        gsap.fromTo(bar, { width: 0 }, {
          width: `${value}%`,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: bar, start: 'top 92%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
        gsap.from(title, {
          y: 28, duration: 0.65,
          scrollTrigger: { trigger: title, start: 'top 90%', once: true }
        });
      });
    });
  }

  private initAnimeInteractions(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    anime({
      targets: '.stats i',
      translateY: [0, -7],
      duration: 1800,
      delay: anime.stagger(160),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });

    document.querySelectorAll<HTMLElement>('.service-item').forEach((card) => {
      card.addEventListener('pointerenter', () => {
        anime.remove(card.querySelector('.icon'));
        anime({
          targets: card.querySelector('.icon'),
          scale: [1, 1.08],
          rotate: [0, 3],
          duration: 420,
          easing: 'easeOutBack'
        });
      });
      card.addEventListener('pointerleave', () => {
        anime({
          targets: card.querySelector('.icon'),
          scale: 1,
          rotate: 0,
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
    this.gsapContext?.revert();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    anime.remove('.stats i, .service-item .icon');
  }
}
