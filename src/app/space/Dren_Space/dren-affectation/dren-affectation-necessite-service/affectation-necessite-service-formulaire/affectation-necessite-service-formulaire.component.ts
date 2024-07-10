import { Component, inject } from '@angular/core';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Card, CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

interface posteDemande {
  posteDemander: any;
  nombreDeposte: any;
}

@Component({
  selector: 'mrt-affectation-necessite-service-formulaire',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    CardModule,
    DropdownModule,
    FormsModule,
    TableModule,
    RouterLink,
    FileUploadModule,
    InputTextModule,
    RippleModule,
    ButtonModule,
  ],
  templateUrl: './affectation-necessite-service-formulaire.component.html',
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
export class AffectationNecessiteServiceFormulaireComponent {
  image!: any;
  postedem!: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  listPost = Array<posteDemande>();

  pieceLibelle: string = ''; //libelle de limage

  poste: string = '';

  messageService = inject(MessageService);

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'post', header: 'Libelle piece' },
    { field: 'nbr', header: 'Image' },
  ];

  colsForm: Cols[] = [
    { field: 'post', header: 'Poste demandé' },
    { field: 'nbr', header: 'Nombre de poste demandé' },
  ];

  // Liste de Wilaya
  corps = [
    'Instituteur',
    'Insp Ens Fond',
    'Prof de college',
    'Prof Ens Secondaire',
    'Insp Adj Ens Fond',
  ];

  // liste des pieces justificatives
  listeLibellePiece = ['Piece1', 'Piece2', 'Piece3', 'Piece4'];

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

  ajouterForm() {
    if (this.postedem > 0 && this.poste != null) {
      this.listPost.push({
        posteDemander: this.poste,
        nombreDeposte: this.postedem,
      });
      this.poste = '';
      this.postedem = 0;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Poste et Nombre de poste sont obligatoires',
      });
    }
  }

  removePiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }

  removeFormulaire(index: number) {
    this.listPost.splice(index, 1);
  }
}
