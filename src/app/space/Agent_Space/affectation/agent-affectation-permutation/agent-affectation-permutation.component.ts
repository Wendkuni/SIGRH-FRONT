import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { PermutationNiveauNationalComponent } from './permutation-niveau-national/permutation-niveau-national.component';
import { PermutationReceptionComponent } from './permutation-reception/permutation-reception.component';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'mrt-agent-affectation-permutation',
  standalone: true,
  template: `
    <!-- <p-tabView> -->
    <!-- Envoi -->
    <!-- <p-tabPanel header="Envoi">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Formulaire de permutation niveau national
        </div>
        <div class="m-2">
          <mrt-permutation-niveau-national></mrt-permutation-niveau-national>
        </div>
      </p-tabPanel> -->

    <!-- Reception -->
    <!-- <p-tabPanel header="Reception">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Formulaire de permutation niveau national
        </div>
        <div class="m-2">
          <mrt-permutation-reception></mrt-permutation-reception>
        </div>
      </p-tabPanel> -->
    <!-- </p-tabView> -->
    <p-card>
      <div class="text-900 font-bold text-3xl mb-4 mt-2">
        Demande de permutation
      </div>
      <div class="m-2">
        <mrt-permutation-reception></mrt-permutation-reception>
      </div>
    </p-card>
  `,
  imports: [
    TabViewModule,
    CardModule,
    PermutationNiveauNationalComponent,
    PermutationReceptionComponent,
  ],
})
export class AgentAffectationPermutationComponent {}
