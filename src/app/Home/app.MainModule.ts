import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from '../app-routing.module';
import { MainRoutes } from '../Routing/app.MainRoutes';

import { HomeComponent } from './app.HomeComponent';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class MainModule { }