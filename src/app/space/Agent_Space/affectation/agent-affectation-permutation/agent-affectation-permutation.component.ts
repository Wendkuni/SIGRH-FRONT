import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { PermutationNiveauNationalComponent } from './permutation-niveau-national/permutation-niveau-national.component';
import { PermutationNiveauRegionalComponent } from './permutation-niveau-regional/permutation-niveau-regional.component';
import { PermutationNiveauDepartementalComponent } from './permutation-niveau-departemental/permutation-niveau-departemental.component';

@Component({
  selector: 'mrt-agent-affectation-permutation',
  standalone: true,
  imports: [
    TabViewModule,
    PermutationNiveauNationalComponent,
    PermutationNiveauRegionalComponent,
    PermutationNiveauDepartementalComponent
  ],
  templateUrl: './agent-affectation-permutation.component.html',
  styleUrl: './agent-affectation-permutation.component.scss'
})
export class AgentAffectationPermutationComponent {

}
