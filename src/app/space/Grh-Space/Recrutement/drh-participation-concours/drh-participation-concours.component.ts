import {Component} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {
  DrhRecrutementIntegrationDirectComponent
} from "../drh-recrutement-integration-direct/drh-recrutement-integration-direct.component";
import {DrhStageRecrutementComponent} from "../drh-stage-recrutement/drh-stage-recrutement.component";

@Component({
  selector: 'mrt-drh-participation-concours',
  standalone: true,
  imports: [
    TabViewModule,
    DrhRecrutementIntegrationDirectComponent,
    DrhStageRecrutementComponent
  ],
  templateUrl: './drh-participation-concours.component.html',
  styleUrl: './drh-participation-concours.component.scss'
})
export class DrhParticipationConcoursComponent {

}
