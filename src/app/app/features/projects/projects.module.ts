// src/app/features/projects/projects.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProjectListComponent }
];

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectsModule { }
