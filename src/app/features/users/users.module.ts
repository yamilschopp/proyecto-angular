import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { InitUserComponent } from './components/init-user/init-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddUserComponent,
    InitUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
