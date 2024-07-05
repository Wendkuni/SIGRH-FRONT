import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';
import { ButtonModule } from 'primeng/button';
import { MessageService, ConfirmationService } from 'primeng/api';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'mrt-permutation-reception',
  standalone: true,
  templateUrl: './permutation-reception.component.html',
  styleUrl: './permutation-reception.component.scss',
  imports: [
    StepperModule,
    DropdownModule,
    CommonModule,
    ButtonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    TableModule,
    AgentFormDetailsViewComponent,
  ],
  providers: [MessageService, ConfirmationService],
})
export class PermutationReceptionComponent {
  active: number = 0;
  pieceLibelle: string = '';
  image!: any;
  listPieceJustificatifAgent1 = Array<PieceJustificatif>();
  messageService = inject(MessageService);

  confirmationService = inject(ConfirmationService);

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'libelle', header: 'Libellé de la pièce' },
    { field: 'images', header: 'Images' },
  ];

  // liste des pieces justificatives
  listeLibellePiece = [
    'Demande manuscrite des copermutants',
    'Copie de la pièce d’identité',
    'Certificat de prise de service',
  ];

  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  removeFile() {
    this.image = null;
  }

  ajouterAgent1() {
    if (this.image != null && this.pieceLibelle != '') {
      this.listPieceJustificatifAgent1.push({
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

  removePieceAgent1(index: number) {
    this.listPieceJustificatifAgent1.splice(index, 1);
  }
}
