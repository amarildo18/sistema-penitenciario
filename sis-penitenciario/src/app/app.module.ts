import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/main-layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/main-layout/sidebar/sidebar.component';
import { RegisterAccountComponent } from './components/register-account/register-account.component';
import { PresidiarioListComponent } from './components/presidiario-list/presidiario-list.component';
import { PresidiarioDetailComponent } from './components/presidiario-detail/presidiario-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    RegisterAccountComponent,
    PresidiarioListComponent,
    PresidiarioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
