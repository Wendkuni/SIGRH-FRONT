import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AffectationNecessiteServiceFormulaireComponent } from './affectation-necessite-service-formulaire/affectation-necessite-service-formulaire.component';
import { AffectationNecessiteServiceTraitementComponent } from './affectation-necessite-service-traitement/affectation-necessite-service-traitement.component';

@Component({
  selector: 'mrt-dren-affectation-necessite-service',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule,
    AffectationNecessiteServiceFormulaireComponent,
    AffectationNecessiteServiceTraitementComponent,
  ],
  template: `
    <p-tabView>
      <!-- Demande en attente -->
      <p-tabPanel header="Demande en attente">
        <mrt-affectation-necessite-service-traitement />
      </p-tabPanel>
      <!-- Formulaire -->
      <p-tabPanel header="Formulaire">
        <mrt-affectation-necessite-service-formulaire />
      </p-tabPanel>
    </p-tabView>
  `,
})
export class DrenAffectationNecessiteServiceComponent {}
