import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AffectationNecessiteServiceTraitementComponent } from './affectation-necessite-service-traitement/affectation-necessite-service-traitement.component';
import { AffectationNecessiteServiceFormulaireComponent } from './affectation-necessite-service-formulaire/affectation-necessite-service-formulaire.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mrt-dren-affectation-necessite-service',
  standalone: true,
  imports: [
    TabViewModule,
    TableModule,
    AffectationNecessiteServiceTraitementComponent,
    AffectationNecessiteServiceFormulaireComponent,
    CardModule,
  ],
  template: `
    <p-card>
      <div class="text-900 font-bold text-3xl mb-2 mt-2">
        Affectation par nécessité de service
      </div>
      <!-- <p-tabView> -->
      <!-- Demande en attente -->
      <!-- <p-tabPanel header="Agent en exercice"> -->
      <mrt-affectation-necessite-service-formulaire></mrt-affectation-necessite-service-formulaire>
      <!-- </p-tabPanel> -->
      <!-- Formulaire -->
      <!-- <p-tabPanel header="Agent sortant">
          <mrt-affectation-necessite-service />
        </p-tabPanel>
      </p-tabView> -->
    </p-card>
  `,
})
export class DrenAffectationNecessiteServiceComponent {}
