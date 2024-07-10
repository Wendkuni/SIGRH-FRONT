import { Component, inject } from '@angular/core';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'mrt-convenance-personnel-personnel-list',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    BadgeModule,
  ],
  templateUrl: './mrt-convenance-personnel-personnel-list.component.html',
  styleUrl: './mrt-convenance-personnel-personnel-list.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class ConvenancePersonnelPersonnelListComponent {
  // colonne du tableau
  colDemandeEnAttente: Cols[] = [
    { field: 'num', header: 'N° Demande' },
    { field: 'choix1', header: 'Choix 1' },
    { field: 'choix2', header: 'Choix 2' },
    { field: 'choix3', header: 'Choix 3' },
    { field: 'choix4', header: 'Choix 4' },
    { field: 'choix5', header: 'Choix 5' },
    { field: 'piece', header: 'Pièce(s) jointe(s)' },
  ];

  // données du tableau
  tableDataDemandeEnAttente: any[] = [
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
      piece: [
        'CV',
        'Lettre de motivation',
        'Diplôme',
        'Attestation de travail',
        'Certificat de travail',
        'Extrait de casier judiciaire',
      ],
    },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onCancel() {
    this.confirmationService.confirm({
      message:
        "Voulez-vous annuler cette demande ? Auccun retour n'est possible !",
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Opération effectuée avec succès',
          life: 3000,
        });
      },
    });
  }
}
