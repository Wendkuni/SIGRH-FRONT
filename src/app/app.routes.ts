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
            './space/Agent_Space/Mobilite/agent-space-home/agent-space-home.component'
          ).then((item) => item.AgentSpaceHomeComponent),
      },
      {
        path: 'agent-convenance-personnelle',
        loadComponent: () =>
          import(
            './space/Agent_Space/Mobilite/affectation/agent-affectation-convenance-personnelle/agent-affectation-convenance-personnelle.component'
          ).then((item) => item.AgentAffectationConvenancePersonnelleComponent),
      },
      {
        path: 'agent-permutation-poste',
        loadComponent: () =>
          import(
            './space/Agent_Space/Mobilite/affectation/agent-affectation-permutation/agent-affectation-permutation.component'
          ).then((item) => item.AgentAffectationPermutationComponent),
      },
      {
        path: 'agent-nomination',
        loadComponent: () =>
          import(
            './space/Grh-Space/Affectation/agent-nomination/agent-nomination.component'
          ).then((item) => item.AgentNominationComponent),
      },
      {
        path: 'dren-affectation-convenance-personnelle',
        loadComponent: () =>
          import(
            './space/Dren_Space/Mobilite/dren-affectation/dren-affectation-convenance-personnelle/dren-affectation-convenance-personnelle.component'
          ).then((item) => item.DrenAffectationConvenancePersonnelleComponent),
      },
      {
        path: 'dren-necessite-service',
        loadComponent: () =>
          import(
            './space/Dren_Space/Mobilite/dren-affectation/dren-affectation-necessite-service/dren-affectation-necessite-service.component'
          ).then((item) => item.DrenAffectationNecessiteServiceComponent),
      },
      {
        path: 'dren-affectation-permutation',
        loadComponent: () =>
          import(
            './space/Dren_Space/Mobilite/dren-affectation/dren-affectation-permutation/dren-affectation-permutation.component'
          ).then((item) => item.DrenAffectationPermutationComponent),
      },
      {
        path: 'recapitulatif-convenance-personnelle',
        loadComponent: () =>
          import(
            './space/Statistiques/Affectation/statistique-affectation-convenance-personnel/statistique-affectation-convenance-personnel.component'
          ).then(
            (item) => item.StatistiqueAffectationConvenancePersonnelComponent
          ),
      },
      {
        path: 'recapitulatif-permutation',
        loadComponent: () =>
          import(
            './space/Statistiques/Affectation/statistique-affectation-permutation/statistique-affectation-permutation.component'
          ).then((item) => item.StatistiqueAffectationPermutationComponent),
      },
      {
        path: 'recapitulatif-nomination',
        loadComponent: () =>
          import(
            './space/Statistiques/Affectation/statistique-affectation-nomination/statistique-affectation-nomination.component'
          ).then((item) => item.StatistiqueAffectationNominationComponent),
      },
      {
        path: 'necessite-service-sortant',
        loadComponent: () =>
          import(
            './space/Grh-Space/Affectation/affectation-necessite-service/affectation-necessite-service.component'
          ).then((item) => item.AffectationNecessiteServiceComponent),
      },
      {
        path: 'commission-affectation-convenance-personnelle',
        loadComponent: () =>
          import(
            './space/Comission_Space/Affectation/traitement-affectation-convenance-personnel/traitement-affectation-convenance-personnel.component'
          ).then(
            (item) => item.TraitementAffectationConvenancePersonnelComponent
          ),
      },
      {
        path: 'commission-necessite-service',
        loadComponent: () =>
          import(
            './space/Comission_Space/Affectation/traitement-necessite-service/traitement-necessite-service.component'
          ).then((item) => item.TraitementNecessiteServiceComponent),
      },
      {
        path: 'commission-affectation-permutation',
        loadComponent: () =>
          import(
            './space/Comission_Space/Affectation/traitement-permutation/traitement-permutation.component'
          ).then((item) => item.TraitementPermutationComponent),
      },
      {
        path: 'agent-allocation',
        loadComponent: () =>
          import(
            './space/Affaire_Sociale/allocation/agent-allocation/agent-allocation.component'
          ).then((item) => item.AgentAllocationComponent),
      },
      {
        path:'commission-nomination',
        loadComponent: () =>
          import(
            './space/Comission_Space/Affectation/traitement-nomination/traitement-nomination.component'
          ).then((item) => item.TraitementNominationComponent),
      },
      //Cariere
      {
        path:'mes-dossiers',
        loadComponent: () =>
          import(
            './space/Agent_Space/Carriere/mes-dossiers/mes-dossiers.component'
          ).then((item) => item.MesDossiersComponent),
      },
      {
        path:'agent-integration',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-integration/agent-integration.component'
        ).then((item) => item.AgentIntegrationComponent),
      }
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
