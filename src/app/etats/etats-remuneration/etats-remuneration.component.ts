import {Component, ViewChild} from '@angular/core';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {personnelColonneTable} from "../../core/data/personals/personnel.model";
import {ButtonModule} from "primeng/button";
import {DatePipe, UpperCasePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {TooltipModule} from "primeng/tooltip";
import {Cols} from "../../core/data/primeng/primeng.model";
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'mrt-etats-remuneration',
  standalone: true,
  imports: [
    CardModule,
    TabViewModule,
    ButtonModule,
    DatePipe,
    InputTextModule,
    RippleModule,
    TableModule,
    TagModule,
    TooltipModule,
    UpperCasePipe,
    AccordionModule
  ],
  templateUrl: './etats-remuneration.component.html',
  styleUrl: './etats-remuneration.component.scss'
})
export class EtatsRemunerationComponent {

  // colonne du tableau
  colsMois: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArabe', header: 'Nom Prenom Arabe'},
    {field: 'nni', header: 'Nni'},
    {field: 'dateEffet', header: 'Date'}
  ];

  colsDren: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArabe', header: 'Nom Prenom Arabe'},
    {field: 'nni', header: 'Nni'},
    {field: 'dren', header: 'Dren'}
  ];

  colsLocalite: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArabe', header: 'Nom Prenom Arabe'},
    {field: 'nni', header: 'Nni'},
    {field: 'localite', header: 'Localite'}
  ];

  cols: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'nomPrenomArabe', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'}
  ];


  constructor() { }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
