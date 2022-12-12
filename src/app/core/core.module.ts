import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    HomeComponent,
    NoFoundComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationModule
  ]
})
export class CoreModule { }
