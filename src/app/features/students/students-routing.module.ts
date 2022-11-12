import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitStudentComponent } from './components/init-student/init-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';

const routes: Routes = [
  {path: '', component: InitStudentComponent, children:[
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
