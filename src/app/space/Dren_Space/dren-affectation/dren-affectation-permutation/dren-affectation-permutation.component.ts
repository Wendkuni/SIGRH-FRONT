import { Component, inject } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'mrt-dren-affectation-permutation',
  standalone: true,
  imports: [
    TableModule,
    ToolbarModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
  ],
  templateUrl: './dren-affectation-permutation.component.html',
  styleUrl: './dren-affectation-permutation.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class DrenAffectationPermutationComponent {
  // colonne du tableau
  colDossiersPermutaitons: any = [
    { field: 'N°', header: 'N°' },
    { field: 'matricule', header: 'Matricule' },
    { field: 'nomPrenom', header: 'Nom et Prénoms' },
    { field: 'nni', header: 'NNI' },
    { field: 'grade', header: 'Grade' },
    { field: 'option', header: 'Option' },
    { field: 'lieu', header: 'Lieu de travail' },
    { field: 'position', header: 'Position' },
    { field: 'ancieneteGenerale', header: 'Ancienneté Générale' },
    { field: 'anciennetePoste', header: 'Ancienneté Wilaya' },
    { field: 'situationFamiliale', header: 'Situation Familiale' },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  selectedDossier: any = [];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
