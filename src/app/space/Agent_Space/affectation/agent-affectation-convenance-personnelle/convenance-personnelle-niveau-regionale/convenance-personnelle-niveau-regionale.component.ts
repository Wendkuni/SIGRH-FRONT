import { Component, inject } from '@angular/core';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import { DropdownModule } from 'primeng/dropdown';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';

@Component({
  selector: 'mrt-convenance-personnelle-niveau-regionale',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    FormsModule,
    MultiSelectModule,
    FileUploadModule,
    TableModule,
    ToastModule,
    DatePipe,
    ConfirmDialogModule,
    DividerModule,
    TooltipModule,
    AgentFormDetailsViewComponent,
  ],
  templateUrl: './convenance-personnelle-niveau-regionale.component.html',
  styles: `
    :host ::ng-deep {
    .p-fileupload {
      padding: 0;
  
      .p-fileupload-buttonbar {
        display: none;
      }
  
      .p-fileupload-content {
        border: 0 none;
        padding: 0;
      }
  
      .p-fileupload-row {
        display: none;
      }
  
      .p-progressbar {
        display: none;
      }
    }
  }
  `,
  providers: [MessageService, ConfirmationService],
})
export class ConvenancePersonnelleNiveauRegionaleComponent {
  pieceLibelle: string = '';

  image!: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  messageService = inject(MessageService);

  confirmationService = inject(ConfirmationService);

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'libelle', header: 'Libellé de la pièce' },
    { field: 'images', header: 'Images' },
  ];

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  // Distinction
  listeDistinction = ['Nationale', 'Régionale', 'Départementale'];

  // liste des pieces justificatives
  listeLibellePiece = [
    "Photocopie de l'arrêter de recrutement",
    "Note de service d'affectation vers la Wilaya/attestation de travail signee par le Dren",
    "Dernier rapport d'inspection pédagogique",
    "Trois dernières notes d'évaluation administrative",
    'Extrait de naissance des enfants à charge',
    'Certificat de vie collective des enfants à charge',
    'Acte de mariage',
    'Attestation de travail du conjoint',
    'Attestation médicale signée par un médecin spécialiste asermenté',
    'Compte rendu sur rapport médical',
    'Copie certifiée attestant la distinction',
    'Autre document',
  ];

  // Sexe
  sexeOptions = ['Masculin', 'Féminin'];

  // Nombre d'enfants
  nbrEnfantsOptions = ['Moins de 5 enfants', '5 enfants et plus'];

  // Ancienneté
  ancieneteList = ['Moins de 15 ans', '15 ans et plus'];

  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  removeFile() {
    this.image = null;
  }

  ajouter() {
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

  removePiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }
}
