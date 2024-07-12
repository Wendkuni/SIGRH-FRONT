import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';
import { ButtonModule } from 'primeng/button';
import { MessageService, ConfirmationService, Footer } from 'primeng/api';
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
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';

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
    DynamicDialogModule,
    AgentFormDetailsViewComponent,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
})
export class PermutationReceptionComponent {
  active: number = 0;
  pieceLibelle: string = '';
  image!: any;
  listPieceJustificatifAgent1 = Array<PieceJustificatif>();
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  confirmationService = inject(ConfirmationService);
  ref: DynamicDialogRef | undefined;
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

  users: any = [
    {
      idAgent: 78,
      matricule: '2310NO',
      nomPrenom: 'Ousmane',
      nomPrenomArab: 'ouam',
      nni: '000258465',
      dteRecrutement: '2024-06-25',
      dteTitularisation: '2024-06-25',
      dteSortie: '2024-06-25',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401143',
      adressEmp: 'Alajo',
      debutCntrat: '2024-06-25',
      finCntrat: '2024-06-25',
      dateNaiss: '2024-06-25',
      lieuNaiss: 'SAWQED',
      actifOrNot: true,
      bank: 'FIDELITY',
      codeBank: 'FI02',
      numroCpte: '025F36',
      cleRib: '001F',
      detacher: 'ME',
      ministerOrigine: 'MS',
      roles: ['ROLE_USER'],
    },
    {
      idAgent: 79,
      matricule: '2311NO',
      nomPrenom: 'Aminata',
      nomPrenomArab: 'amn',
      nni: '000258466',
      dteRecrutement: '2024-06-26',
      dteTitularisation: '2024-06-26',
      dteSortie: '2024-06-26',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401144',
      adressEmp: 'Kokrobite',
      debutCntrat: '2024-06-26',
      finCntrat: '2024-06-26',
      dateNaiss: '2024-06-26',
      lieuNaiss: 'THERJW',
      actifOrNot: true,
      bank: 'ACCESS',
      codeBank: 'AC02',
      numroCpte: '025F37',
      cleRib: '002F',
      detacher: 'WE',
      ministerOrigine: 'MP',
      roles: ['ROLE_DREN'],
    },
    {
      idAgent: 80,
      matricule: '2312NO',
      nomPrenom: 'Moussa',
      nomPrenomArab: 'mouss',
      nni: '000258467',
      dteRecrutement: '2024-06-27',
      dteTitularisation: '2024-06-27',
      dteSortie: '2024-06-27',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401145',
      adressEmp: 'Labadi',
      debutCntrat: '2024-06-27',
      finCntrat: '2024-06-27',
      dateNaiss: '2024-06-27',
      lieuNaiss: 'DFJKEW',
      actifOrNot: true,
      bank: 'CALYON',
      codeBank: 'CA02',
      numroCpte: '025F38',
      cleRib: '003F',
      detacher: 'ER',
      ministerOrigine: 'MQ',
      roles: ['ROLE_GRH'],
    },
    {
      idAgent: 81,
      matricule: '2313NO',
      nomPrenom: 'Aïcha',
      nomPrenomArab: 'aysh',
      nni: '000258468',
      dteRecrutement: '2024-06-28',
      dteTitularisation: '2024-06-28',
      dteSortie: '2024-06-28',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401146',
      adressEmp: 'Nungua',
      debutCntrat: '2024-06-28',
      finCntrat: '2024-06-28',
      dateNaiss: '2024-06-28',
      lieuNaiss: 'TQWEGG',
      actifOrNot: true,
      bank: 'HSBC',
      codeBank: 'HS02',
      numroCpte: '025F39',
      cleRib: '004F',
      detacher: 'RT',
      ministerOrigine: 'MA',
      roles: ['ROLE_DRH'],
    },
    {
      idAgent: 82,
      matricule: '2314NO',
      nomPrenom: 'Ibrahim',
      nomPrenomArab: 'ibrhm',
      nni: '000258469',
      dteRecrutement: '2024-06-29',
      dteTitularisation: '2024-06-29',
      dteSortie: '2024-06-29',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401147',
      adressEmp: 'Adenta',
      debutCntrat: '2024-06-29',
      finCntrat: '2024-06-29',
      dateNaiss: '2024-06-29',
      lieuNaiss: 'OPQVBN',
      actifOrNot: true,
      bank: 'BARCLAYS',
      codeBank: 'BA02',
      numroCpte: '025F40',
      cleRib: '005F',
      detacher: 'TY',
      ministerOrigine: 'MB',
      roles: ['ROLE_COMMISSION'],
    },
    {
      idAgent: 83,
      matricule: '2315NO',
      nomPrenom: 'Fatoumata',
      nomPrenomArab: 'ftmt',
      nni: '000258470',
      dteRecrutement: '2024-06-30',
      dteTitularisation: '2024-06-30',
      dteSortie: '2024-06-30',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401148',
      adressEmp: 'Madina',
      debutCntrat: '2024-06-30',
      finCntrat: '2024-06-30',
      dateNaiss: '2024-06-30',
      lieuNaiss: 'WQERGB',
      actifOrNot: true,
      bank: 'UBA',
      codeBank: 'UB02',
      numroCpte: '025F41',
      cleRib: '006F',
      detacher: 'UI',
      ministerOrigine: 'MC',
      roles: ['ROLE_ADMIN'],
    },
    {
      idAgent: 84,
      matricule: '2316NO',
      nomPrenom: 'Abdoulaye',
      nomPrenomArab: 'abdly',
      nni: '000258471',
      dteRecrutement: '2024-07-01',
      dteTitularisation: '2024-07-01',
      dteSortie: '2024-07-01',
      statusEmp: 'Fonctionnaire',
      tlphone: '0261401149',
      adressEmp: 'Dansoman',
      debutCntrat: '2024-07-01',
      finCntrat: '2024-07-01',
      dateNaiss: '2024-07-01',
      lieuNaiss: 'ZXCVBN',
      actifOrNot: true,
      bank: 'ECOBANK',
      codeBank: 'EC02',
      numroCpte: '025F42',
      cleRib: '007F',
      detacher: 'IO',
      ministerOrigine: 'MD',
      roles: ['ROLE_USER'],
    },
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
