import { Routes } from '@angular/router';

import { MainComponent } from 'src/app/pages/main/main.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { DetailsComponent } from 'src/app/pages/details/details.component';

export const HomeRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'items', component: SearchComponent },
  { path: 'items/:id', component: DetailsComponent }
];
