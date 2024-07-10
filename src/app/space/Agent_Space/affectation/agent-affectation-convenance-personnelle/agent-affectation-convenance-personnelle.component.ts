import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ConvenancePersonnelleNiveauNationaleComponent } from './convenance-personnelle-niveau-nationale/convenance-personnelle-niveau-nationale.component';
import { CardModule } from 'primeng/card';
import { ConvenancePersonnelPersonnelListComponent } from './mrt-convenance-personnel-personnel-list/mrt-convenance-personnel-personnel-list.component';

@Component({
  selector: 'mrt-agent-affectation-convenance-personnelle',
  standalone: true,
  template: `
    <p-tabView>
      <!--  Demande en attente -->
      <p-tabPanel header="Demandes">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Liste des demandes pour convenances personnelles enregistrées
        </div>
        <div class="m-2">
          <mrt-convenance-personnel-personnel-list />
        </div>
      </p-tabPanel>

      <!-- Formulaire demande nationale -->
      <p-tabPanel header="Formulaire">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Formulaire d'affectation pour convenances personnelles niveau national
        </div>
        <div class="m-2">
          <mrt-convenance-personnelle-niveau-nationale />
        </div>
      </p-tabPanel>
    </p-tabView>
  `,
  imports: [
    TabViewModule,
    ConvenancePersonnelleNiveauNationaleComponent,
    CardModule,
    ConvenancePersonnelPersonnelListComponent,
  ],
})
export class AgentAffectationConvenancePersonnelleComponent {}
