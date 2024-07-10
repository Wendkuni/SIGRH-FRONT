import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { PermutationNiveauNationalComponent } from './permutation-niveau-national/permutation-niveau-national.component';
import { PermutationReceptionComponent } from './permutation-reception/permutation-reception.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mrt-agent-affectation-permutation',
  standalone: true,
  template: `
    <p-tabView>
      <!-- Demande en attente -->
      <!-- <p-tabPanel header="Demande en attente">
        <mrt-permutation-niveau-national />
      </p-tabPanel> -->

      <!-- Formulaire -->
      <p-tabPanel header="Formulaire">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Demande de permutation
        </div>
        <div class="m-2">
          <mrt-permutation-reception></mrt-permutation-reception>
        </div>
      </p-tabPanel>
    </p-tabView>
  `,
  imports: [
    TabViewModule,
    CardModule,
    PermutationNiveauNationalComponent,
    PermutationReceptionComponent,
  ],
})
export class AgentAffectationPermutationComponent {}
