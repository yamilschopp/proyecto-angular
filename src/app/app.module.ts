import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http'; 




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
