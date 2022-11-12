import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    HomeComponent,
    NoFoundComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CoreModule { }
