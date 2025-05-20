import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { StatsSectionComponent } from '../stats-section/stats-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ResumeSectionComponent } from '../resume-section/resume-section.component';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    StatsSectionComponent,
    SkillsSectionComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
