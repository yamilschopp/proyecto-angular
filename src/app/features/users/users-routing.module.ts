import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitUserComponent } from './components/init-user/init-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path: '', component: InitUserComponent, children:[
    {path: '', component: ListUserComponent},
    {path: 'add', component: AddUserComponent},
    {path: 'edit', component: EditUserComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
