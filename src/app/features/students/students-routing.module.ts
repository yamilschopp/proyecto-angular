import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitStudentsComponent } from './components/init-students/init-students.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  {path: '', component: InitStudentsComponent, children:[
    {path: '', component: ListStudentsComponent},
    {path: 'add', component: AddStudentComponent},
    {path: 'edit', component: EditStudentComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
