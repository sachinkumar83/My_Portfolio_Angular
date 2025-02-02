// src/app/core/services/email.service.ts
import { Injectable,Injector  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormDataService } from 'src/app/core/services/form-data.service';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient,private formDataService: FormDataService) { }
  private contactFormService!: ContactFormData; 
  sendEmail() {
    const formData = this.formDataService.getFormData();
    console.log('Sending Email:', formData);
  }
}
