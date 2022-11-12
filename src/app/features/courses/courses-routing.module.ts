import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitCourseComponent } from './components/init-course/init-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ListCourseComponent } from './components/list-course/list-course.component';

const routes: Routes = [
  {path:'', component: InitCourseComponent, children: 
  [
    {path: '', component: ListCourseComponent},
    {path: 'add', component: AddCourseComponent},
    {path: 'edit', component: EditCourseComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
