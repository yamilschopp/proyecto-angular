import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { InitUsersComponent } from './components/init-users/init-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/user.effects';
import { userFeatureKey, reducerUser } from './state/user.reducer';


@NgModule({
  declarations: [
    AddUsersComponent,
    EditUsersComponent,
    ListUsersComponent,
    InitUsersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, reducerUser),
    EffectsModule.forFeature([UserEffects]),
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
