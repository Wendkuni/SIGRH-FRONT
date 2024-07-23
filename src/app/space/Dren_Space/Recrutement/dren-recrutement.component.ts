import {Component} from "@angular/core";
import {TabViewModule} from "primeng/tabview";
import {DrenBesoinPersonnelComponent} from "./dren-besoin-personnel/dren-besoin-personnel.component";
import {
  DrenBesoinPersonnelStatisticComponent
} from "./dren-besoin-personnel-statistic/dren-besoin-personnel-statistic.component";

@Component({
  selector: 'mrt-dren-recrutement-personnel',
  standalone: true,
  imports: [
    TabViewModule,
    DrenBesoinPersonnelComponent,
    DrenBesoinPersonnelStatisticComponent
  ],
  template: `
    <p-tabView>
      <!-- Besoin Personnel -->
      <p-tabPanel header="Besoin Personnel">
        <mrt-dren-besoin-personnel></mrt-dren-besoin-personnel>
      </p-tabPanel>
      <!-- Statistique -->
      <p-tabPanel header="Statistique">
        <mrt-dren-besoin-personnel-statistic></mrt-dren-besoin-personnel-statistic>
      </p-tabPanel>
    </p-tabView>
  `,
})
export class DrenRecrutementComponent {
}
