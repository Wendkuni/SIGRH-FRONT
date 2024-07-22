import { Component } from '@angular/core';
import {Cols} from "../../../../../core/data/primeng/primeng.model";
import {ButtonModule} from "primeng/button";
import {DatePipe} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";
import {DividerModule} from "primeng/divider";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'mrt-traitement-necessite-service-sortant',
  standalone: true,
  imports: [
    ButtonModule,
    DatePipe,
    RippleModule,
    SharedModule,
    TableModule,
    TooltipModule,
    DividerModule,
    ToolbarModule
  ],
  templateUrl: './traitement-necessite-service-sortant.component.html',
  styleUrl: './traitement-necessite-service-sortant.component.scss'
})
export class TraitementNecessiteServiceSortantComponent {
  colsForm: Cols[] = [
    { field: 'NNI', header: 'NNI' },
    { field: 'NP', header: 'Nom et Prénom' },
    { field: 'Sexe', header: 'Sexe' },
    { field: 'DP', header: 'Diplôme Professionnel' },
    { field: 'DN', header: 'Date Naissance' },
    { field: 'DA', header: 'Diplôme Académique' },
    { field: 'BA', header: 'Bilan Académique' },
    { field: 'Cor', header: 'Corp' },
    { field: 'SM', header: 'Situation Matrimoniale' },
    { field: 'Rang', header: 'Rang' },
    { field: 'CM', header: 'Choix major' },
    { field: 'D', header: 'DREN' },
  ];
}
