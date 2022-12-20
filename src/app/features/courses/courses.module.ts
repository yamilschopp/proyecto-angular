import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { EditCoursesComponent } from './components/edit-courses/edit-courses.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { InitCoursesComponent } from './components/init-courses/init-courses.component';
import { StoreModule } from '@ngrx/store';
import { coursesFeatureKey, reducerCourse } from './state/courses.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './state/courses.effects';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AddCoursesComponent,
    EditCoursesComponent,
    ListCoursesComponent,
    InitCoursesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(coursesFeatureKey, reducerCourse),
    EffectsModule.forFeature([CoursesEffects]),
    CoursesRoutingModule,
    SharedModule
  ]
})
export class CoursesModule { }
