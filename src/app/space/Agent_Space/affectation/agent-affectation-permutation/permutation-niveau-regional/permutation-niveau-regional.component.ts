import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { PieceJustificatif } from '../../../../../core/data/personals/personnel.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cols } from '../../../../../core/data/primeng/primeng.model';

@Component({
  selector: 'mrt-permutation-niveau-regional',
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
  templateUrl: './permutation-niveau-regional.component.html',
  styleUrl: './permutation-niveau-regional.component.scss',
  providers: [MessageService,ConfirmationService]
})
export class PermutationNiveauRegionalComponent {

  
  pieceLibelle: string = '';

  image!: any;

  listPieceJustificatifAgent1 = Array<PieceJustificatif>();
  listPieceJustificatifAgent2 = Array<PieceJustificatif>();

  messageService = inject(MessageService);

  confirmationService = inject(ConfirmationService);

     // colonne du tableau
     colsDossier: Cols[] = [
      {field: 'libelle', header: 'Libellé de la pièce'},
      {field: 'images', header: 'Images'}
    ]

       // liste des pieces justificatives
   listeLibellePiece = [
    'Formulaire ou demande manuscrite',
    'Dernière situation administrative',
    'Curriculum vitae de l’intéressé s’il y a lieu',
    'Lettre de motivation s’il y a lieu.'
  ];

  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  removeFile() {
    this.image = null;
  }

  ajouterAgent1() {
    if(this.image != null && this.pieceLibelle != ''){
      this.listPieceJustificatifAgent1.push({libelle: this.pieceLibelle, images: this.image});
      this.pieceLibelle = '';
      this.image = null;
    }
    else {
      this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Le libellé et l\'image sont obligatoires'});
    }
  }

  removePieceAgent1(index: number) {
    this.listPieceJustificatifAgent1.splice(index, 1);
  }

  ajouterAgent2() {
    if(this.image != null && this.pieceLibelle != ''){
      this.listPieceJustificatifAgent2.push({libelle: this.pieceLibelle, images: this.image});
      this.pieceLibelle = '';
      this.image = null;
    }
    else {
      this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Le libellé et l\'image sont obligatoires'});
    }
  }

  removePieceAgent2(index: number) {
    this.listPieceJustificatifAgent2.splice(index, 1);
  }


}
