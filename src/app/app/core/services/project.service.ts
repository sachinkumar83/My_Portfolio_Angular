// src/app/core/services/project.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    {
      title: 'ISY Project',
      description: 'Designed robust APIs using ASP.NET Core and built a dynamic admin dashboard using Angular.',
      technologies: ['ASP.NET Core', 'SQL Server', 'Angular', 'Bootstrap'],
      link: ''
    },
    {
      title: 'ISC Project',
      description: 'Worked on API integrations and frontend visualization with .NET & jQuery.',
      technologies: ['.NET', 'jQuery', 'SQL Server'],
      link: ''
    },
    {
      title: 'Weather Forecast App',
      description: 'Utilized GeoAPIs to create a weather forecasting application.',
      technologies: ['React.js', 'GeoAPI'],
      link: 'https://weather-aap-as.netlify.app/'
    },
    {
      title: 'Todo-List',
      description: 'A simple and effective to-do list application built using React.js.',
      technologies: ['React.js'],
      link: ''
    }
  ];

  getProjects(): Observable<any[]> {
    return of(this.projects);
  }
}
