import { Component } from '@angular/core';
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'mrt-traitement-nomination',
  standalone: true,
  imports: [
    TableModule,
    CardModule,
    ButtonModule,
    DividerModule,
    ToolbarModule
  ],
  templateUrl: './traitement-nomination.component.html',
  styleUrl: './traitement-nomination.component.scss'
})
export class TraitementNominationComponent {

  colsForm: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'posteNominatioon', header: 'Poste de nomination' },
    { field: 'ancienneteFonctionPublique', header: 'Ancienneté dans la Fonction publique' },
    { field: 'noteInspectionPédagogique', header: 'Note d’inspection pédagogique' },
    { field: 'noteEvaluationAdministrative', header: 'Note d’évaluation administrative' },
    { field: 'anciennetéPosteTravail', header: 'Ancienneté dans le poste de travail' },
    { field: 'anciennetéAdministrationScolaire', header: 'Ancienneté dans l’administration scolaire' },
    { field: 'autresDiplômesCertifications', header: 'Autres diplômes ou certifications' },
    { field: 'distinction', header: 'Distinction' },
    { field: 'discriminationPositive', header: 'Discrimination positive' }
  ];

}
