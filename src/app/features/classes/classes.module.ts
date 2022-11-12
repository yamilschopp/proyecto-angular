import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { SharedModule } from '../../shared/shared.module';
import { AddClassComponent } from './components/add-class/add-class.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { InitClassComponent } from './components/init-class/init-class.component';
import { AddStudentClassComponent } from './components/add-student-class/add-student-class.component';

@NgModule({
  declarations: [
    InitClassComponent,
    ListClassesComponent,
    AddClassComponent,
    EditClassComponent,
    AddStudentClassComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    SharedModule
  ]
})
export class ClassesModule { }
