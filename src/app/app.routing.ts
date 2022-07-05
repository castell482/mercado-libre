import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/layouts/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/shared/layouts/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
		pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
