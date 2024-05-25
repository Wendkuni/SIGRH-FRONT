import { Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/app.layout.component";

export const routes: Routes = [
  {
    path: 'layout',
    component: AppLayoutComponent
  }
  // {
  //   path: '',
  //   redirectTo: 'layout',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'auth',
  //   data: { breadcrumb: 'Auth' }
  // },
  // {
  //   path: 'layout',
  //   component: AppLayoutComponent,
  //   children: [
  //     {
  //       path: 'home'
  //     },
  //     {
  //       path: 'personnel'
  //     },
  //     {
  //       path: 'conge-absence'
  //     },
  //     {
  //       path: 'social-assurance'
  //     },
  //     {
  //       path: 'fonction-list'
  //     },
  //     {
  //       path: 'couriers'
  //     },
  //     {
  //       path: 'remunerations'
  //     }
  //   ]
  // },
  // {
  //   path: 'notfound'
  // },
  // {
  //   path: '**',
  //   redirectTo: '/notfound'
  // }
];
