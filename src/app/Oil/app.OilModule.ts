import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OilComponent } from '../Oil/app.OilComponent';
import { OilRoutes } from '../Routing/app.OilRoutes';

@NgModule({
  declarations: [
  OilComponent
  ],
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(OilRoutes)
  ],
  providers: [],
  bootstrap: [OilComponent]
})
export class OilModule { }