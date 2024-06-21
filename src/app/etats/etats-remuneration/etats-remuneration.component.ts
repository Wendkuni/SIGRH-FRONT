import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'mrt-etats-remuneration',
  standalone: true,
  imports: [
    CardModule,
    TabViewModule
  ],
  templateUrl: './etats-remuneration.component.html',
  styleUrl: './etats-remuneration.component.scss'
})
export class EtatsRemunerationComponent {

}
