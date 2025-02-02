// src/app/features/contact/contact-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/app/core/services/email.service';
import { FormDataService } from 'src/app/core/services/form-data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder,private formDataService: FormDataService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formDataService.setFormData(this.contactForm.value);
    // this.submitted = true;
    // if (this.contactForm.valid) {
    //   this.emailService.sendEmail(this.contactForm.value).subscribe(response => {
    //     if(response?.success) {
    //       this.successMessage = 'Your message has been sent successfully!';
    //       this.contactForm.reset();
    //       this.submitted = false;
    //     }
    //   });
    // }
  }
}
