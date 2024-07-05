import { Component, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { StepsModule } from 'primeng/steps';
import { TooltipModule } from 'primeng/tooltip';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';

@Component({
  selector: 'mrt-permutation-niveau-national',
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
    StepsModule,
    AgentFormDetailsViewComponent,
  ],
  templateUrl: './permutation-niveau-national.component.html',
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
export class PermutationNiveauNationalComponent {
  pieceLibelle: string = '';

  image!: any;

  listPieceJustificatifAgent1 = Array<PieceJustificatif>();
  listPieceJustificatifAgent2 = Array<PieceJustificatif>();

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

  ajouterAgent2() {
    if (this.image != null && this.pieceLibelle != '') {
      this.listPieceJustificatifAgent2.push({
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

  removePieceAgent2(index: number) {
    this.listPieceJustificatifAgent2.splice(index, 1);
  }
}
