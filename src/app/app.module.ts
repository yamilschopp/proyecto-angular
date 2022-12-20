import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';
import { SharedModule } from './shared/shared.module';
import { ROOT_REDUCERS } from './core/app.state';
import { FeaturesModule } from './features/features.module';

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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    CoreModule,
    SharedModule,
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
