import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ConvenancePersonnelleNiveauNationaleComponent } from "./convenance-personnelle-niveau-nationale/convenance-personnelle-niveau-nationale.component";

@Component({
    selector: 'mrt-agent-affectation-convenance-personnelle',
    standalone: true,
    templateUrl: './agent-affectation-convenance-personnelle.component.html',
    styleUrl: './agent-affectation-convenance-personnelle.component.scss',
    imports: [TabViewModule, ConvenancePersonnelleNiveauNationaleComponent]
})
export class AgentAffectationConvenancePersonnelleComponent {

}
