import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitClassesComponent } from './components/init-classes/init-classes.component';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { AddClassesComponent } from './components/add-classes/add-classes.component';
import { AddStudentClassesComponent } from './components/add-student-classes/add-student-classes.component';
import { EditClassesComponent } from './components/edit-classes/edit-classes.component';

const routes: Routes = [
  {path: '', component: InitClassesComponent, children:[
    {path: '', component: ListClassesComponent},
    {path: 'add', component: AddClassesComponent},
    {path: 'addStudent', component: AddStudentClassesComponent},
    {path: 'edit', component: EditClassesComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
