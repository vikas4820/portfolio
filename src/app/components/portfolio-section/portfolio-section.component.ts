import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PortfolioProject {
  title: string;
  category: string;
  filter: string;
  description: string;
  image: string;
  website: string;
}

@Component({
  selector: 'app-portfolio-section',
  imports: [CommonModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss',
})
export class PortfolioSectionComponent {
  projects: PortfolioProject[] = [
    {
      title: 'Deluxy',
      category: 'E-Commerce',
      filter: 'filter-web',
      description:
        'Luxury delivery platform operating across Italy. Customers can order cakes, flowers, champagne, gifts, and exclusive experiences. I developed the complete full-stack platform along with the admin panel and management system.',
      image: 'img/projects/deluxy-optimized.webp',
      website: 'https://deluxy.it/',
    },
    {
      title: 'Review.co.zw',
      category: 'Web Platform',
      filter: 'filter-web',
      description:
        'Business review and reputation management platform for companies in Zimbabwe. Features include company profiles, ratings, reviews, moderation tools, and a comprehensive admin dashboard. I developed both the website and admin system.',
      image: 'img/projects/review-optimized.webp',
      website: 'https://review.co.zw/',
    },
    {
      title: 'Review International',
      category: 'Web Platform',
      filter: 'filter-web',
      description:
        'International review and recommendation platform that enables users to discover, rate, and review businesses worldwide. Built the complete platform and admin panel with scalable architecture and management features.',
      image: 'img/projects/reviewinternational-optimized.webp',
      website: 'https://reviewinternational.org/',
    },
    {
      title: 'CakeDesign.me',
      category: 'Custom Cake Platform',
      filter: 'filter-web',
      image: 'img/projects/cakedesign-optimized.webp',
      website: 'https://cakedesign.me/',
      description: `AI-powered cake customization platform serving customers across Italy. Users can design personalized cakes by selecting flavors, shapes, fillings, and decorations. Developed the entire platform including website, administration panel, order management, and custom cake configuration system.`
    },

    {
      title: 'Deluxy Flowers',
      category: 'Flower Delivery Platform',
      filter: 'filter-web',
      image: 'img/projects/deluxy-flowers-optimized.webp',
      website: 'https://deluxyflowers.com/',
      description: 'Developed an international flower delivery platform featuring premium bouquets, floral arrangements, and customized gifts. Implemented the complete website, administration panel, catalog management, and order processing system.' 
    },

    {
      title: 'SkillSpace',
      category: 'Learning Management System (LMS)',
      filter: 'filter-web',
      image: 'img/projects/skillspace-optimized.webp',
      website: 'https://skillspace.co.za/',
      description: 'Developed a comprehensive learning management platform supporting online courses, live classes, course purchases, student dashboards, and instructor management. Built the website and administration system for managing users, courses, and learning activities.'
    }
  ];
}
