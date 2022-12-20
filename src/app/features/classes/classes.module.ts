import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { EditClassesComponent } from './components/edit-classes/edit-classes.component';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { InitClassesComponent } from './components/init-classes/init-classes.component';
import { AddStudentClassesComponent } from './components/add-student-classes/add-student-classes.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClassesEffects } from './state/classes.effects';
import { classesFeatureKey, reducerClass } from './state/classes.reducer';
import { StudentsEffects } from '../students/state/students.effects';
import { reducerStudent, studentsFeatureKey } from '../students/state/students.reducer';
import { coursesFeatureKey, reducerCourse } from '../courses/state/courses.reducer';
import { CoursesEffects } from '../courses/state/courses.effects';


@NgModule({
  declarations: [
    AddClassesComponent,
    EditClassesComponent,
    ListClassesComponent,
    InitClassesComponent,
    AddStudentClassesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(classesFeatureKey, reducerClass),
    EffectsModule.forFeature([ClassesEffects]),
    StoreModule.forFeature(studentsFeatureKey, reducerStudent),
    EffectsModule.forFeature([StudentsEffects]),
    StoreModule.forFeature(coursesFeatureKey, reducerCourse),
    EffectsModule.forFeature([CoursesEffects]),
    ClassesRoutingModule,
    SharedModule
  ]
})
export class ClassesModule { }
