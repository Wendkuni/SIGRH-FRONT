import { Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";
import {AuthGuardService} from "./core/data/users/auth-guard.service";

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
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(item => item.DashboardComponent),
      },
      {
        path: 'personnel',
        loadComponent: () => import('./pages/personnel/personnel.component').then(item => item.PersonnelComponent)
      },
      {
        path: 'personnel-details/:id',
        loadComponent: () => import('./pages/personnel-details/personnel-details.component').then(item => item.PersonnelDetailsComponent)
      },
      {
        path: 'users-profile',
        loadComponent: () => import('./pages/user-profile/user-profile.component').then(item => item.UserProfileComponent)
      },
      {
        path: 'conge-absence',
        loadComponent: () => import('./pages/conge-absence/conge-absence.component').then(item => item.CongeAbsenceComponent)
      },
      {
        path:'remuneration',
        loadComponent: () => import('./pages/remuneration/remuneration.component').then(item => item.RemunerationComponent)
      },
      {
        path:'social-assurance',
        loadComponent: () => import('./pages/affaire-social-assurance/affaire-social-assurance.component').then(item => item.AffaireSocialAssuranceComponent)
      },
      {
        path: 'fonction-list',
        loadComponent: () => import('./pages/fonction-list/fonction-list.component').then(item => item.FonctionListComponent)
      },
      {
        path: 'etats-personnel',
        loadComponent: () => import('./pages/etats-personnel/etats-personnel.component').then(item => item.EtatsPersonnelComponent)
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
