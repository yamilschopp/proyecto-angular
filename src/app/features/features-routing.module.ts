import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'', children:[
    {path: 'cursos', loadChildren:() => import('./courses/courses.module').then(m => m.CoursesModule) },
    {path: 'estudiantes', loadChildren:() => import('./students/students.module').then(m => m.StudentsModule) },
    {path: 'clases', loadChildren:() => import('./classes/classes.module').then(m => m.ClassesModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
