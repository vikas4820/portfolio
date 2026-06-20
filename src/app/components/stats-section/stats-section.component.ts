import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Stat {
  icon: string;
  count: number;
  target: number;
  title: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss',
})
export class StatsSectionComponent implements OnInit {

  stats: Stat[] = [
    {
      icon: 'bi bi-globe',
      count: 0,
      target: 6,
      title: 'Live Projects',
    },
    {
      icon: 'bi bi-code-slash',
      count: 0,
      target: 3,
      title: 'Years Experience',
    },
    {
      icon: 'bi bi-stack',
      count: 0,
      target: 10,
      title: 'Technologies',
    },
    {
      icon: 'bi bi-building',
      count: 0,
      target: 4,
      title: 'Countries Served',
    },
  ];

  ngOnInit(): void {
    this.stats.forEach((stat) => this.animateCounter(stat));
  }

  animateCounter(stat: Stat): void {
    const duration = 1500;
    const increment = stat.target / (duration / 20);

    const interval = setInterval(() => {
      stat.count += increment;

      if (stat.count >= stat.target) {
        stat.count = stat.target;
        clearInterval(interval);
      }
    }, 20);
  }
}