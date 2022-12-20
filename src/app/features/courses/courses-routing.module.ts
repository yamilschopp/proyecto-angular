import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitCoursesComponent } from './components/init-courses/init-courses.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { EditCoursesComponent } from './components/edit-courses/edit-courses.component';

const routes: Routes = [
  {path:'', component: InitCoursesComponent, children: 
  [
    {path: '', component: ListCoursesComponent},
    {path: 'add', component: AddCoursesComponent},
    {path: 'edit', component: EditCoursesComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
