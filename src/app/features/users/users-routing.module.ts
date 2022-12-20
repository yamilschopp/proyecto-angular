import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitUsersComponent } from './components/init-users/init-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';

const routes: Routes = [
  {path: '', component: InitUsersComponent, children:[
    {path: '', component: ListUsersComponent},
    {path: 'add', component: AddUsersComponent},
    {path: 'edit', component: EditUsersComponent},
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
