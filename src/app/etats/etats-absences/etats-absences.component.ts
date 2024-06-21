import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {TabViewModule} from "primeng/tabview";
import {Cols} from "../../core/data/primeng/primeng.model";

@Component({
  selector: 'mrt-etats-absences',
  standalone: true,
  imports: [
    CardModule,
    TabViewModule
  ],
  templateUrl: './etats-absences.component.html',
  styleUrl: './etats-absences.component.scss'
})
export class EtatsAbsencesComponent {

  colDispo: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'disponible', header: 'Disponible'},
    {field: 'actifornot', header: 'Actif ou non'},
    {field: 'absent', header: 'Absent'},
    {field: 'congé', header: 'congé'}
  ];

}
