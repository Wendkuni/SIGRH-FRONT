import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthGuardService } from './core/data/users/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./shared/login/login.component').then(
        (item) => item.LoginComponent
      ),
  },
  {
    path: 'auth-agent',
    loadComponent: () =>
      import('./shared/login-agent/login-agent.component').then(
        (item) => item.LoginAgentComponent
      ),
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (item) => item.DashboardComponent
          ),
      },
      {
        path: 'home-agent-space',
        loadComponent: () =>
          import(
            './space/Agent_Space/agent-space-home/agent-space-home.component'
          ).then((item) => item.AgentSpaceHomeComponent),
      },
      {
        path: 'agent-convenance-personnelle',
        loadComponent: () =>
          import(
            './space/Agent_Space/affectation/agent-affectation-convenance-personnelle/agent-affectation-convenance-personnelle.component'
          ).then((item) => item.AgentAffectationConvenancePersonnelleComponent),
      },
      {
        path: 'agent-permutation-poste',
        loadComponent: () =>
          import(
            './space/Agent_Space/affectation/agent-affectation-permutation/agent-affectation-permutation.component'
          ).then((item) => item.AgentAffectationPermutationComponent),
      },
    ],
  },
  {
    path: 'notfound',
    loadComponent: () =>
      import('./shared/not-found/not-found.component').then(
        (item) => item.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/notfound',
  },
];
