import { Component } from '@angular/core';
import CONSTANT from '../../../contants-var';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume-section',
  imports: [
    CommonModule
  ],
  templateUrl: './resume-section.component.html',
  styleUrl: './resume-section.component.scss'
})
export class ResumeSectionComponent {

  userInfo: any = {
    address: CONSTANT.ADDRESS,
    phoneNo: CONSTANT.PHONENO,
    email: CONSTANT.EMAIL,
    education: {
      diploma: {
        name: CONSTANT.EDUCATION.diploma.name,
        duration: CONSTANT.EDUCATION.diploma.duration,
        place: CONSTANT.EDUCATION.diploma.place,
        description: CONSTANT.EDUCATION.diploma.description,
      },
      graduation: {
        name: CONSTANT.EDUCATION.graduation.name,
        duration: CONSTANT.EDUCATION.graduation.duration,
        place: CONSTANT.EDUCATION.graduation.place,
        description: CONSTANT.EDUCATION.graduation.description
      },
      btech: {
        name: CONSTANT.EDUCATION.btech.name,
        branch: CONSTANT.EDUCATION.btech.branch,
        year: CONSTANT.EDUCATION.btech.year,
        university: CONSTANT.EDUCATION.btech.university,
        description: CONSTANT.EDUCATION.btech.description
      }
    },
    professional_exp: {
      job: {
        name: CONSTANT.PROFESSIONAL_EXP.name,
        duration: CONSTANT.PROFESSIONAL_EXP.duration,
        place: CONSTANT.PROFESSIONAL_EXP.place,
        description: CONSTANT.PROFESSIONAL_EXP.description,
        careerProgression: CONSTANT.PROFESSIONAL_EXP.careerProgression
      },
      apprenticeship: {
        name: CONSTANT.APPRENTICESHIP_EXP.name,
        duration: CONSTANT.APPRENTICESHIP_EXP.duration,
        place: CONSTANT.APPRENTICESHIP_EXP.place,
        description: CONSTANT.APPRENTICESHIP_EXP.description,
      }
    },
     
  }

  reversedCareerProgression = [...this.userInfo.professional_exp.job.careerProgression].reverse();

  constructor() {}

}
