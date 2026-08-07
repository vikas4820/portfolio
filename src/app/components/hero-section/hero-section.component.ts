import { Component, OnInit } from '@angular/core';
import CONSTANT from '../../../contants-var';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {

  profileInfo: any = {};

  async ngOnInit() {
    this.profileInfo = {
      facebook: CONSTANT.FACEBOOK_HANDLE,
      instagram: CONSTANT.INSTAGRAM_HANDLE,
      linkedin: CONSTANT.LINKEDIN_HANDLE,
      twitter: CONSTANT.TWITTER,
      github: CONSTANT.GITHUB
    };
  }

}
