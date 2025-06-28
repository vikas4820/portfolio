import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos';
import Typed from 'typed.js';

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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  ngOnInit(): void {
    this.initialLoader();
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 120
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initTyped();
      this.initIsotope();
      this.initSwipper();
    }, 100);
  }

  private initTyped(): void {
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typedStringsAttr = typedElement.getAttribute('data-typed-items');
      if (typedStringsAttr) {
        const stringsArray = typedStringsAttr.split(',').map(s => s.trim());
        new Typed('.typed', {
          strings: stringsArray,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    }
  }

  private initIsotope(): void {
    if ((window as any).Isotope && (window as any).imagesLoaded) {
      document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
        const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
        const container = isotopeItem.querySelector('.isotope-container');

        if (container) {
          (window as any).imagesLoaded(container, () => {
            const initIsotope = new (window as any).Isotope(container, {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });

            isotopeItem.querySelectorAll('.isotope-filters li').forEach((filterEl) => {
              filterEl.addEventListener('click', (event) => {
                const target = event.currentTarget as HTMLElement;
                const active = isotopeItem.querySelector('.filter-active');
                if (active) active.classList.remove('filter-active');
                target.classList.add('filter-active');
                initIsotope.arrange({
                  filter: target.getAttribute('data-filter')
                });

                if (typeof (window as any).aosInit === 'function') {
                  (window as any).aosInit();
                }
              });
            });
          });
        }
      });
    }
  }

  private initSwipper() {
    const swiper = new (window as any).Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  private initialLoader() {
    const preloader = document.querySelector('#preloader');
    console.log("preloader", preloader);
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.remove();
        }, 1000); // 1500 milliseconds = 1.5 seconds delay
      });
    }
  }

}
