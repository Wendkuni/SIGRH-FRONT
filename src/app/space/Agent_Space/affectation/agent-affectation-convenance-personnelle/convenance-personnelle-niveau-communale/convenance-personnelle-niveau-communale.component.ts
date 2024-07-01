import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { PieceJustificatif, Personnel } from '../../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../../core/data/primeng/primeng.model';

@Component({
  selector: 'mrt-convenance-personnelle-niveau-communale',
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
    TooltipModule
  ],
  templateUrl: './convenance-personnelle-niveau-communale.component.html',
  styleUrl: './convenance-personnelle-niveau-communale.component.scss',
  providers: [MessageService,ConfirmationService]
})
export class ConvenancePersonnelleNiveauCommunaleComponent {

  
  pieceLibelle: string = '';

  image!: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  messageService = inject(MessageService);

  confirmationService = inject(ConfirmationService);

   // colonne du tableau
   colsDossier: Cols[] = [
    {field: 'libelle', header: 'Libellé de la pièce'},
    {field: 'images', header: 'Images'}
  ]

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);

   // Distinction
   listeDistinction = [
    'Nationale',
    'Régionale',
    'Départementale'
  ];

   // liste des pieces justificatives
   listeLibellePiece = [
    'Photocopie de l\'arrêter de recrutement',
    'Note de service d\'affectation vers la Wilaya/attestation de travail signee par le Dren',
    'Dernier rapport d\'inspection pédagogique',
    'Trois dernières notes d\'évaluation administrative',
    'Extrait de naissance des enfants à charge',
    'Certificat de vie collective des enfants à charge',
    'Acte de mariage',
    'Attestation de travail du conjoint',
    'Attestation médicale signée par un médecin spécialiste asermenté',
    'Compte rendu sur rapport médical',
    'Copie certifiée attestant la distinction',
    'Autre document'
  ];

  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  removeFile() {
    this.image = null;
  }

  ajouter() {
    if(this.image != null && this.pieceLibelle != ''){
      this.listPieceJustificatif.push({libelle: this.pieceLibelle, images: this.image});
      this.pieceLibelle = '';
      this.image = null;
    }
    else {
      this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Le libellé et l\'image sont obligatoires'});
    }
  }

  removePiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }

}
