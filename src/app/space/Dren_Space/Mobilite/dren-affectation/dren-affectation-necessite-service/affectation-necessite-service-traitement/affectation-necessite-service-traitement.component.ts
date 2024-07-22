import { Component, inject } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { Toolbar, ToolbarModule } from 'primeng/toolbar';
import { Cols } from '../../../../../../core/data/primeng/primeng.model';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'mrt-affectation-necessite-service-traitement',
  standalone: true,
  imports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
  ],
  templateUrl: './affectation-necessite-service-traitement.component.html',
  styleUrl: './affectation-necessite-service-traitement.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AffectationNecessiteServiceTraitementComponent {
  // colonne du tableau
  colsDossierSortant: Cols[] = [
    { field: 'N°', header: 'N°' },
    { field: 'posteDemande', header: 'Poste demandé' },
    { field: 'corps', header: 'Corps' },
    { field: 'grade', header: 'Grade' },
    { field: 'option', header: 'Option' },
    { field: 'lieu', header: 'Lieu de travail' },
    { field: 'nbr', header: 'Nombre' },
  ];

  // données du tableau
  tableDataDossier: any[] = [
    {
      n: 1,
      posteDemande: 'Inspecteur',
      corps: 'Inspecteur',
      grade: 'A1',
      option: 'Mathématique',
      lieu: 'Daloa',
      nbr: 2,
    },
    {
      n: 2,
      posteDemande: 'Directeur',
      corps: 'Directeur',
      grade: 'A2',
      option: 'Physique',
      lieu: 'Abidjan',
      nbr: 3,
    },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  selectedDossier: any = [];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
