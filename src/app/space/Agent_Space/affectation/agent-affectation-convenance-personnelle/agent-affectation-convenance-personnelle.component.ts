import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ConvenancePersonnelleNiveauNationaleComponent } from "./convenance-personnelle-niveau-nationale/convenance-personnelle-niveau-nationale.component";
import { CardModule } from 'primeng/card';
import { ConvenancePersonnelleNiveauRegionaleComponent } from './convenance-personnelle-niveau-regionale/convenance-personnelle-niveau-regionale.component';
import { ConvenancePersonnelleNiveauCommunaleComponent } from './convenance-personnelle-niveau-communale/convenance-personnelle-niveau-communale.component';

@Component({
    selector: 'mrt-agent-affectation-convenance-personnelle',
    standalone: true,
    templateUrl: './agent-affectation-convenance-personnelle.component.html',
    styleUrl: './agent-affectation-convenance-personnelle.component.scss',
    imports: 
    [
        TabViewModule,
        ConvenancePersonnelleNiveauNationaleComponent, 
        CardModule,
        ConvenancePersonnelleNiveauRegionaleComponent,
        ConvenancePersonnelleNiveauCommunaleComponent
    ]
})
export class AgentAffectationConvenancePersonnelleComponent {

}
