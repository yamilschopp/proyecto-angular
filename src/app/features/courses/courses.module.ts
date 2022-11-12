import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { InitCourseComponent } from './components/init-course/init-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { SharedModule } from '../../shared/shared.module';
import { ListCourseComponent } from './components/list-course/list-course.component';




@NgModule({
  declarations: [
    InitCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    ListCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule,
  ]
})
export class CoursesModule { }
