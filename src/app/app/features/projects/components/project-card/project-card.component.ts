// src/app/features/projects/components/project-card/project-card.component.ts
import { Component, Input } from '@angular/core';
import { Project } from 'src/app/app/core/services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
