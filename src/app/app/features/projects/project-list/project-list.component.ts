// src/app/features/projects/project-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Project,ProjectService } from 'src/app/app/core/services/project.service';
//ProjectService
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
