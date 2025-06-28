import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {

  user:any = {
    aboutUs: 'I’m a Full-Stack Developer skilled in Angular and Node.js with NestJS. I build clean, responsive frontend apps and robust backend APIs to create seamless web experiences. Passionate about writing efficient, maintainable code and delivering real-world solutions that users love.',
    dedication: 'I’m a dedicated developer passionate about crafting high-quality web applications. I focus on clean code, smooth user experiences, and scalable solutions that make a real impact.',
    dob: '08 August 2002',
    age: 22,
    website: 'https://www.jamtechtechnologies.com',
    education: 'Diploma In CSE',
    phoneNo: '+91 9369894820',
    email: "vkchauhan877cool@gmail.com",
    city: 'Gola Gokran Nath, Kheri, U.P.',
    freelance: 'Available'
  };

  constructor(){
    
  }

}
