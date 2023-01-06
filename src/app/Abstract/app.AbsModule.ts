import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AbsComponent } from '../Abstract/app.AbsComponent';
import { AbsRoutes } from '../Routing/app.AbsRoutes';

@NgModule({
  declarations: [
    AbsComponent
  ],
  imports: [
    CommonModule, FormsModule, 
    RouterModule.forChild(AbsRoutes)
  ],
  providers: [],
  bootstrap: [AbsComponent]
})
export class AbsModule { }