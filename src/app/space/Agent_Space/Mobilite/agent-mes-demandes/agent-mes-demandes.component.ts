import {Component} from '@angular/core';
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {BadgeModule} from "primeng/badge";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {DatePipe} from "@angular/common";
import {TagModule} from "primeng/tag";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-mes-demandes',
  standalone: true,
  imports: [
    BadgeModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    TableModule,
    DatePipe,
    TagModule,
    CardModule
  ],
  templateUrl: './agent-mes-demandes.component.html',
  styleUrl: './agent-mes-demandes.component.scss'
})
export class AgentMesDemandesComponent {

  colDemandeTraite: Cols[] = [
    {field: 'num', header: 'Numéro de demande'},
    {field: 'dateDemande', header: 'Date de demande'},
    {field: 'typeDemande', header: 'Type de demande'},
    {field: 'statut', header: 'Statut de la demande'},
  ];

  dataDemandeTraite: any = [
    {num: 'D0001', dateDemande: '01/01/2021', typeDemande: 'Convenance personnelle', statut: 'En attente'},
    {num: 'D0002', dateDemande: '02/01/2021', typeDemande: 'Permutation', statut: 'Acceptée'},
    {num: 'D0003', dateDemande: '03/01/2021', typeDemande: 'Convenance personnelle', statut: 'En attente'},
    {num: 'D0004', dateDemande: '04/01/2021', typeDemande: 'Convenance personnelle', statut: 'Refusée'},
  ];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  // @ts-ignore
  getStatusSeverity(status: string) {
    let statusSeverity: any = []
    switch (status) {
      case 'En attente':
        return 'info';
      case 'Acceptée':
        return 'success';
      case 'Refusée':
        return 'danger';
    }
  }

}
