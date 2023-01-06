import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AcrComponent } from './app.AcrComponent';
import { AcrRoutes } from '../Routing/app.AcrRoutes';

@NgModule({
  declarations: [
    AcrComponent
  ],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(AcrRoutes)
  ],
  providers: [],
  bootstrap: [AcrComponent]
})
export class AcrModule { }