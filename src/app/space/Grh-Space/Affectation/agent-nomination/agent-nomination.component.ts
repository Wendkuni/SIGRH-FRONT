import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { StepperModule } from 'primeng/stepper';
import { TableModule } from 'primeng/table';
import { PieceJustificatif } from '../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../core/data/primeng/primeng.model';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

interface Nomination {
  matricule: string;
  poste: string;
  listPiecesAgent: Array<PieceJustificatif>;
}

@Component({
  selector: 'mrt-agent-nomination',
  standalone: true,
  imports: [
    StepperModule,
    CardModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  templateUrl: './agent-nomination.component.html',
  styleUrl: './agent-nomination.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class AgentNominationComponent {
  poste: any = [
    {
      label: 'Directeur',
      diplome: 'Bac',
      nombre: 2,
    },
    {
      label: 'Directeur adjoint',
      diplome: 'Bac + 2',
      nombre: 3,
    },
    {
      label: 'Chef de departement',
      diplome: 'Bac + 3',
      nombre: 4,
    },
  ];

  listeLibellePiece: any = [
    'Dernière situation administrative',
    'Lettre portant proposition de nomination',
    'Curriculum vitae de l’intéressé(e)',
  ];

  colNomination: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'poste', header: 'Poste' },
    { field: 'nbrPiece', header: 'Nombre de pièce jointe' },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'libelle', header: 'Libellé de la pièce' },
    { field: 'images', header: 'Images' },
  ];

  matricule: string = '';
  pieceLibelle: string = '';
  libellePoste = ['Directeur', 'Directeur adjoint', 'Chef de departement'];
  selectPoste: string = '';
  // Ancienneté
  ancieneteList = ['Moins de 15 ans', '15 ans et plus'];
  // Distinction
  listeDistinction = ['Nationale', 'Régionale', 'Départementale'];
  // Sexe
  sexeOptions = ['Masculin', 'Féminin'];
  // Nature du diplome
  natureDiplome = [
    'Bac+ 5 et plus',
    'Bac+ 3',
    'Autres diplômes et certifications',
  ];
  image!: any;

  listeNomination = Array<Nomination>();

  listPieceJustificatif = Array<PieceJustificatif>();

  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  removeFile() {
    this.image = null;
  }

  ajouterPiece() {
    if (this.image != null && this.pieceLibelle != '') {
      this.listPieceJustificatif.push({
        libelle: this.pieceLibelle,
        images: this.image,
      });
      this.pieceLibelle = '';
      this.image = null;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Le libellé et l'image sont obligatoires",
      });
    }
  }

  supprimerPiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }

  ajouterNomination() {
    if (this.matricule != '' && this.selectPoste != '') {
      this.listeNomination.push({
        matricule: this.matricule,
        poste: this.selectPoste,
        listPiecesAgent: this.listPieceJustificatif,
      });
      console.log(this.listeNomination);
      this.matricule = '';
      this.selectPoste = '';
      this.listPieceJustificatif = [];
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Le matricule et le poste sont obligatoires',
      });
    }
  }

  supprimerNomination(index: number) {
    this.listeNomination.splice(index, 1);
  }

  valider() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment valider cette opération ?',
      accept: () => {
        this.listeNomination = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Opération effectuée avec succès',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejeté',
          detail: 'Opération rejetée',
          life: 3000,
        });
      },
    });
  }

  annuler() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment annuler cette opération ?',
      accept: () => {
        this.listeNomination = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Opération annulée avec succès',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejeté',
          detail: 'Opération rejetée',
          life: 3000,
        });
      },
    });
  }

  // onTrashPicture(pictureToDelete: NewListingPicture) {
  //   const indexToDelete = this.pictures().findIndex(
  //     (picture) => picture.file.name === pictureToDelete.file.name
  //   );
  //   this.pictures().splice(indexToDelete, 1);
  //   this.validatePictures();
  // }
}
