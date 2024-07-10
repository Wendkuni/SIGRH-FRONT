import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DrenAffectationConvenancePersonnelleComponent } from './dren-affectation-convenance-personnelle/dren-affectation-convenance-personnelle.component';

@Component({
  selector: 'mrt-dren-affectation',
  standalone: true,
  imports: [TabViewModule, DrenAffectationConvenancePersonnelleComponent],
  template: `
    <!-- <p-tabView> -->
    <!-- Entrant -->
    <!-- <p-tabPanel header="Entrant"></p-tabPanel> -->
    <!-- Sortant -->
    <!-- <p-tabPanel header="Sortant"> -->
    <mrt-dren-affectation-convenance-personnelle />
    <!--  </p-tabPanel>
    </p-tabView> -->
  `,
})
export class DrenAffectationComponent {}
