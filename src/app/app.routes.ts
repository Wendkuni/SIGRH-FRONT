import {Routes} from '@angular/router';
import {AppLayoutComponent} from './layout/app.layout.component';
import {AuthGuardService} from './core/data/users/auth-guard.service';

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
            './space/Agent_Space/Affaire_Sociale/agent-allocation-sociale/agent-allocation-sociale.component'
            ).then((item) => item.AgentAllocationSocialeComponent),
      },
      {
        path: 'commission-nomination',
        loadComponent: () =>
          import(
            './space/Comission_Space/Affectation/traitement-nomination/traitement-nomination.component'
            ).then((item) => item.TraitementNominationComponent),
      },
      //Cariere
      {
        path: 'mes-dossiers',
        loadComponent: () =>
          import(
            './space/Agent_Space/Carriere/mes-dossiers/mes-dossiers.component'
            ).then((item) => item.MesDossiersComponent),
      },
      {
        path: 'agent-integration',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-integration/agent-integration.component'
          ).then((item) => item.AgentIntegrationComponent),
      },
      {
        path: 'agent-demande-titularisation',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-demande-titularisation/agent-demande-titularisation.component'
          ).then((item) => item.AgentDemandeTitularisationComponent),
      },
      {
        path: 'avancement-choix',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/avancement-choix/avancement-choix.component'
          ).then((item) => item.AvancementChoixComponent),
      },
      {
        path: 'agent-bonification',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-bonification/agent-bonification.component'
          ).then((item) => item.AgentBonificationComponent),
      },
      {
        path: 'agent-reclassement',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-reclassement/agent-reclassement.component'
          ).then((item) => item.AgentReclassementComponent),
      },
      {
        path: 'agent-evaluation-fiche',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-evaluation-fiche/agent-evaluation-fiche.component'
          ).then((item) => item.AgentEvaluationFicheComponent),
      },
      {
        path: 'agent-position-detachemnt',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-position-detachemnt/agent-position-detachemnt.component'
          ).then((item) => item.AgentPositionDetachemntComponent),
      },
      {
        path: 'agent-position-disponibilite',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-position-disponibilite/agent-position-disponibilite.component'
          ).then((item) => item.AgentPositionDisponibiliteComponent),
      },
      {
        path: 'agent-retraite-anticiper',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-retraite-anticiper/agent-retraite-anticiper.component'
          ).then((item) => item.AgentRetraiteAnticiperComponent),
      },
      {
        path: 'agent-demission',
        loadComponent: () => import(
          './space/Agent_Space/Carriere/agent-demission/agent-demission.component'
          ).then((item) => item.AgentDemissionComponent),
      },
      {
        path: 'dren-allocation-familiale',
        loadComponent: () => import(
          './space/Dren_Space/Affaire_Sociale/dren-allocation-familiale/dren-allocation-familiale.component'
          ).then((item) => item.DrenAllocationFamilialeComponent),
      },
      {
        path: 'drh-allocation-familiale',
        loadComponent: () => import(
          './space/Grh-Space/Affaire_Sociale/drh-allocation-familiale/drh-allocation-familiale.component'
          ).then((item) => item.DrhAllocationFamilialeComponent),
      },
      {
        path: 'agent-mes-demandes',
        loadComponent: () => import(
          './space/Agent_Space/Mobilite/agent-mes-demandes/agent-mes-demandes.component'
          ).then((item) => item.AgentMesDemandesComponent),
      },
      {
        path: 'drh-expression-besoin-personnel',
        loadComponent: () => import(
          './space/Grh-Space/Recrutement/drh-expression-besoin-personnel/drh-expression-besoin-personnel.component'
          ).then((item) => item.DrhExpressionBesoinPersonnelComponent),
      },
      {
        path: 'drh-participation-concours',
        loadComponent: () => import(
          './space/Grh-Space/Recrutement/drh-participation-concours/drh-participation-concours.component'
          ).then((item) => item.DrhParticipationConcoursComponent),
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
