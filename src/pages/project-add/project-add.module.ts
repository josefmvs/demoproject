import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectAddPage } from './project-add';

@NgModule({
  declarations: [
    ProjectAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectAddPage),
  ],
  exports: [
    ProjectAddPage
  ]
})
export class ProjectAddPageModule {}
