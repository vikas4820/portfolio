import { Component } from '@angular/core';
import CONSTANT from '../../../contants-var';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  profileInfo: any = {};

  constructor() {}

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
