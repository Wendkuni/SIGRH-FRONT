import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {
  TraitementNecessiteServiceSortantComponent
} from "./traitement-necessite-service-sortant/traitement-necessite-service-sortant.component";
import {
  TraitementNecessiteServiceEnServiceComponent
} from "./traitement-necessite-service-en-service/traitement-necessite-service-en-service.component";

@Component({
  selector: 'mrt-traitement-necessite-service',
  standalone: true,
  imports: [
    TabViewModule,
    TraitementNecessiteServiceSortantComponent,
    TraitementNecessiteServiceEnServiceComponent
  ],
  templateUrl: './traitement-necessite-service.component.html',
  styleUrl: './traitement-necessite-service.component.scss'
})
export class TraitementNecessiteServiceComponent {

}
