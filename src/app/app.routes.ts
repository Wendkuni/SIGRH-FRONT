import { Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    data: { breadcrumb: 'Auth' }
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home'
      },
      {
        path: 'personnel'
      },
      {
        path: 'conge-absence'
      },
      {
        path: 'social-assurance'
      },
      {
        path: 'fonction-list'
      },
      {
        path: 'couriers'
      },
      {
        path: 'remunerations'
      }
    ]
  },
  {
    path: 'notfound'
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }
];
