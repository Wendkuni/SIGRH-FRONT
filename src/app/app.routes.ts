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
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(item => item.DashboardComponent),
        // component: DashboardComponent
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
