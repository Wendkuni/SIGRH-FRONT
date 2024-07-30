import {Component, WritableSignal} from '@angular/core';
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {Table, TableModule} from "primeng/table";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";

interface BesoinPersonnel {
  structure: string;
  profile: string;
  discipline: string;
  date: string;
  nbrPostes: number;
}

@Component({
  selector: 'mrt-drh-expression-besoin-personnel',
  standalone: true,
  imports: [
    CardModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    NgxExtendedPdfViewerModule,
    AvatarModule,
    DropdownModule,
    InputNumberModule,
    CalendarModule,
    TableModule,
    DatePipe,
    InputTextModule,
    RippleModule
  ],
  templateUrl: './drh-expression-besoin-personnel.component.html',
  styleUrl: './drh-expression-besoin-personnel.component.scss'
})
export class DrhExpressionBesoinPersonnelComponent {

  besoinPersonnel: BesoinPersonnel[] = [
    {
      structure: 'Direction des systèmes d\'information',
      profile: 'Ingénieur en informatique',
      discipline: 'Informatique',
      date: '2024',
      nbrPostes: 5
    },
    {
      structure: 'Region du centre: Ecole Benaja',
      profile: 'Enseignant',
      discipline: 'Français',
      date: '01/01/2023',
      nbrPostes: 3
    },
    {
      structure: 'Region du nord: Inspectorat de l\'éducation',
      profile: 'Inspecteur',
      discipline: '',
      date: '2022',
      nbrPostes: 1
    },
    {
      structure: 'Region du sud: Ecole de formation des enseignants',
      profile: 'Formateur',
      discipline: 'Mathématiques',
      date: '2022',
      nbrPostes: 2
    }
  ]
  showExpressionEnPersonnelDialogVisibility: boolean | WritableSignal<boolean> = false;
  colsTableBesoinPersonnel: Cols[] = [
    {field: 'structure', header: 'Structure'},
    {field: 'profile', header: 'Profile'},
    {field: 'discipline', header: 'Discipline'},
    {field: 'date', header: 'Annee'},
    {field: 'nbrPostes', header: 'Nombre de postes'}
  ];

  showExpressionBesoinPersonnelDialog() {
    this.showExpressionEnPersonnelDialogVisibility = true;
  }

  onGlobalFilter(expressionBesoinPersonnelTable: Table, event: Event) {
    expressionBesoinPersonnelTable.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
