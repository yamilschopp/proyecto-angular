import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitClassComponent } from './components/init-class/init-class.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { EditClassComponent } from './components/edit-class/edit-class.component';
import { ListClassesComponent } from './components/list-classes/list-classes.component';
import { AddStudentClassComponent } from './components/add-student-class/add-student-class.component';


const routes: Routes = [
  {path: '', component: InitClassComponent, children:[
    {path: '', component: ListClassesComponent},
    {path: 'add', component: AddClassComponent},
    {path: 'addStudent', component: AddStudentClassComponent},
    {path: 'edit', component: EditClassComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
