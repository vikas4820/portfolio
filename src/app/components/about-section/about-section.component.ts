import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

  user:any = {
    email: "vkchauhan877cool@gmail.com"
  };
  constructor(){
    
  }

}
