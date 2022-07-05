import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomeRoutes } from 'src/app/routers/home.routing';

import { MainComponent } from 'src/app/pages/main/main.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { DetailsComponent } from 'src/app/pages/details/details.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes)
  ],
  exports: []
})
export class HomeModule { }
