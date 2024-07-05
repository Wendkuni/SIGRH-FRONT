import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ConvenancePersonnelleNiveauNationaleComponent } from './convenance-personnelle-niveau-nationale/convenance-personnelle-niveau-nationale.component';
import { CardModule } from 'primeng/card';
import { ConvenancePersonnelleNiveauRegionaleComponent } from './convenance-personnelle-niveau-regionale/convenance-personnelle-niveau-regionale.component';
import { ConvenancePersonnelleNiveauCommunaleComponent } from './convenance-personnelle-niveau-communale/convenance-personnelle-niveau-communale.component';

@Component({
  selector: 'mrt-agent-affectation-convenance-personnelle',
  standalone: true,
  template: `
    <p-tabView>
      <!--  Nationale -->
      <p-tabPanel header="National">
        <div class="text-900 font-bold text-3xl mb-4 mt-2">
          Formulaire d'affectation pour convenances personnelles niveau national
        </div>
        <div class="m-2">
          <mrt-convenance-personnelle-niveau-nationale></mrt-convenance-personnelle-niveau-nationale>
        </div>
      </p-tabPanel>

      <!--  Régional -->
      <!-- <p-tabPanel header="Régional">
      <div class="text-900 font-bold text-3xl mb-4 mt-2">Formulaire d'affectation pour convenances personnelles niveau regional</div>
      <div class="m-2">
      <mrt-convenance-personnelle-niveau-regionale></mrt-convenance-personnelle-niveau-regionale>
      </div> 
    </p-tabPanel> -->

      <!--  moughataa    -->
      <!-- <p-tabPanel header="Départemental">
      <div class="text-900 font-bold text-3xl mb-4 mt-2">Formulaire d'affectation pour convenances personnelles niveau départemental</div>
      <div class="m-2">
      <mrt-convenance-personnelle-niveau-communale></mrt-convenance-personnelle-niveau-communale>
      </div>
    </p-tabPanel> -->
    </p-tabView>
  `,
  imports: [
    TabViewModule,
    ConvenancePersonnelleNiveauNationaleComponent,
    CardModule,
    ConvenancePersonnelleNiveauRegionaleComponent,
    ConvenancePersonnelleNiveauCommunaleComponent,
  ],
})
export class AgentAffectationConvenancePersonnelleComponent {}
