import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  scrollTo(event: Event, id: string) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', `#${id}`);
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.isOpen = false;
  }
}
