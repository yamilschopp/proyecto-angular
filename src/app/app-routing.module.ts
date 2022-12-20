import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NoFoundComponent } from './core/components/no-found/no-found.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [

  {path: 'inicio', component: HomeComponent,canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  {path: 'features', loadChildren:() => import('./features/features.module').then(m => m.FeaturesModule),canActivate: [AuthenticationGuard] },
  {path: 'authentication', loadChildren:() => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule) },
  {path: '**', component: NoFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
