import { Component } from '@angular/core';
import CONSTANT from '../../../contants-var';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  imports: [
    CommonModule
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

  services: any = CONSTANT.SERVICES
  constructor(){}
}
