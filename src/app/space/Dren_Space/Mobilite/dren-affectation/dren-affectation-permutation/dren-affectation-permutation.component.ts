import { Component, inject } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
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
    CardModule,
  ],
  templateUrl: './dren-affectation-permutation.component.html',
  styleUrl: './dren-affectation-permutation.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class DrenAffectationPermutationComponent {
  // colonne du tableau
  colDossiersPermutaitons: any = [
    { field: 'N°', header: 'N°' },
    { field: 'matricule1', header: 'Matricule permutant' },
    { field: 'nomPrenom1', header: 'Prénoms Nom permutant' },
    { field: 'matricule2', header: 'Matricule copermutant' },
    { field: 'nomPrenom2', header: 'Prénoms Nom copermutant' },
    { field: 'option', header: 'Option' },
    { field: 'lieu', header: 'Lieu de permutation' },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  selectedDossier: any = [];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
