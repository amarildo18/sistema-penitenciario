import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { PresidiarioListComponent } from './components/presidiario-list/presidiario-list.component';
import { PresidiarioDetailComponent } from './components/presidiario-detail/presidiario-detail.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterAccountComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'presidiario',
    component:PresidiarioListComponent
  },
  {
    path:'presidiario-view',
    component:PresidiarioDetailComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
