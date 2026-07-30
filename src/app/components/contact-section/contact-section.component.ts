import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {

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

  contactForm!: FormGroup;
  submitted = false;
  statusMessage = '';

  constructor(
    private fb: FormBuilder
  ) { 
    this.handleContactForm();
  }

  ngOnInit() { }

  handleContactForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitted = true;
    const { name, email, subject, message } = this.contactForm.getRawValue();
    const body = `Hi Vikas,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${this.user.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.statusMessage = 'Your email app has been opened with the message ready to send.';
    this.contactForm.reset();
    this.submitted = false;
  }

}
