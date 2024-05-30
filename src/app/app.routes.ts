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
    data: { breadcrumb: 'Auth' },
    loadComponent: () => import('./shared/login/login.component').then(item => item.LoginComponent),
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(item => item.DashboardComponent)
      },
      {
        path: 'personnel',
        loadComponent: () => import('./pages/personnel/personnel.component').then(item => item.PersonnelComponent)
      },
      {
        path: 'personnel-details/:id',
        loadComponent: () => import('./pages/personnel-details/personnel-details.component').then(item => item.PersonnelDetailsComponent)
      }
  ]
  },
  {
    path: 'notfound',
    loadComponent: () => import('./shared/not-found/not-found.component').then(item => item.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }
];
