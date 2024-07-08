import { Component, OnInit, inject } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PersonnelService } from '../../../../../core/data/personals/personnel.service';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../../core/data/personals/personnel.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AffectationService } from '../../../../../core/data/affectation/affectation.service';
import { Cols } from '../../../../../core/data/primeng/primeng.model';
import { Affectation } from '../../../../../core/data/affectation/mobilite.model';
import { DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';
import { AgentFormDetailsViewComponent } from '../../../agent-form-details-view/agent-form-details-view.component';

@Component({
  selector: 'mrt-convenance-personnelle-niveau-nationale',
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
    DatePipe,
    ToastModule,
    ConfirmDialogModule,
    DividerModule,
    TooltipModule,
    AgentFormDetailsViewComponent,
  ],
  templateUrl: './convenance-personnelle-niveau-nationale.component.html',
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
export class ConvenancePersonnelleNiveauNationaleComponent implements OnInit {
  image!: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  // injection du formBuilder
  fb = inject(FormBuilder);

  // Service mobilite
  mobiliteService = inject(AffectationService);

  confirmationService = inject(ConfirmationService);

  // list localite
  listLocalite$!: any;

  listUtilisateur$!: any;

  pieceLibelle: string = '';

  selectZoneAffectation1: string = '';

  situationMatrimonial: boolean = false;

  messageService = inject(MessageService);

  personnelService = inject(PersonnelService);

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'libelle', header: 'Libellé de la pièce' },
    { field: 'images', header: 'Images' },
  ];

  // Sexe
  sexeOptions = ['Masculin', 'Féminin'];

  // Nombre d'enfants
  nbrEnfantsOptions = ['Moins de 5 enfants', '5 enfants et plus'];

  // Ancienneté
  ancieneteList = ['Moins de 15 ans', '15 ans et plus'];

  // Distinction
  listeDistinction = ['Nationale', 'Régionale', 'Départementale'];

  // Situation matrimoniale
  situationMatrimonialeOptions = ['Célibataire', 'Marié', 'Divorcé', 'Veuf'];

  // Liste de Wilaya
  listWilaya = [
    'Nouakchott Nord',
    'Nouakchott Ouest',
    'Nouakchott Sud',
    'Trarza-Inchiri',
    'Nouadhibou',
    'Brakna',
    'Adrar',
    'Tiris Zemour',
    'Gorgol',
    'Assaba',
    'Hodh Gharbi',
    'H. Charghi',
    'Guidimakha',
    'Tagant',
  ];

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

  // Attribut de affection
  affectationForm!: FormGroup;

  ngOnInit(): void {
    this.affectationForm = this.fb.group({
      // ancieneteGenerale: this.fb.control('', [Validators.required, Validators.min(1), Validators.max(100)]),
      // noteInspectionPedagogique: this.fb.control('', [Validators.required, Validators.min(0)]),
      // noteEvaluationPedagogique: this.fb.control('', [Validators.required, Validators.min(0)]),
      // ancienetePoste: this.fb.control('', [Validators.required, Validators.min(1), Validators.max(100)]),
      // distinction: this.fb.control('', [Validators.required]),
      // nbrEnfants: this.fb.control('', [Validators.required, Validators.min(0)]),
      // zoneAffectation1: this.fb.control('', [Validators.required]),
      // zoneAffectation2: this.fb.control('', [Validators.required]),
      // zoneAffectation3: this.fb.control('', [Validators.required]),
      // discriminationPositive: this.fb.control('', [Validators.required]),
      // situationSanitaire: this.fb.control('', [Validators.required]),
      // regroupementConjoints: this.fb.control('', [Validators.required]),
      // autreSituationSociale: this.fb.control('' , [Validators.required]),
      nombreFant: this.fb.control('', [Validators.required]),
      ancieneteGen: this.fb.control('', [Validators.required]),
      ancienetePoste: this.fb.control('', [Validators.required]),
      posteDestinat1: this.fb.control('', [Validators.required]),
      posteDestinat2: this.fb.control('', [Validators.required]),
      posteDestinat3: this.fb.control('', [Validators.required]),
      notePedagogiq: this.fb.control('', [Validators.required]),
      motif: this.fb.control('', [Validators.required]),
      dateEffet: this.fb.control('', [Validators.required]),
    });

    this.getLocalite();
  }

  // Methode pour recuperer les localites
  private getLocalite() {
    this.mobiliteService.getLocalite().subscribe((response) => {
      this.listLocalite$ = response;
    });
  }

  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
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

  save() {
    if (this.listPieceJustificatif.length > 0) {
      this.confirm();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Aucune pièce justificative n'a été ajoutée",
      });
    }
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir continuer ?',
      icon: 'pi pi-check-circle',
      acceptIcon: 'pi pi-check mr-1',
      rejectIcon: 'pi pi-times mr-1',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      rejectButtonStyleClass: 'p-button-danger p-button-sm',
      acceptButtonStyleClass: 'p-button-success p-button-sm',
      accept: () => {
        this.createAffectation();
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          detail: 'Vous avez annuler',
          life: 3000,
        });
      },
    });
  }

  createAffectation() {
    const data = this.getFormData();
    data.personnel = this.selectedPersonnel;
    console.log(this.listPieceJustificatif);
    this.mobiliteService
      .createAffectationByConvenance(data, this.listPieceJustificatif)
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Affectation enregistrée avec succès',
          });
          this.cancelMobilite();
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Affectation non enregistrée',
            life: 3000,
          });
        }
      );
  }

  getFormData(): Affectation {
    const formData = this.affectationForm.value;
    return <Affectation>{
      // ancieneteGenerale: formData.ancieneteGenerale,
      // noteInspectionPedagogique: formData.noteInspectionPedagogique,
      // noteEvaluationPedagogique: formData.noteEvaluationPedagogique,
      // ancienetePoste: formData.ancienetePoste,
      // distinction: formData.distinction,
      // nbrEnfants: formData.nbrEnfants,
      // zoneAffectation1: formData.zoneAffectation1,
      // zoneAffectation2: formData.zoneAffectation2,
      // zoneAffectation3: formData.zoneAffectation3,
      // discriminationPositive: formData.discriminationPositive,
      // situationSanitaire: formData.situationSanitaire,
      // regroupementConjoints: formData.regroupementConjoints,
      // autreSituationSociale: formData.autreSituationSociale

      nombreFant: formData.nombreFant,
      ancieneteGen: formData.ancieneteGen,
      ancienetePoste: formData.ancienetePoste,
      posteDestinat1: formData.posteDestinat1,
      posteDestinat2: formData.posteDestinat2,
      posteDestinat3: formData.posteDestinat3,
      notePedagogiq: formData.notePedagogiq,
      motif: formData.motif,
      dateEffet: formData.dateEffet,
    };
  }

  // Methode pour fermer la vue du formulaire
  cancelMobilite() {
    this.affectationForm.reset();
    this.pieceLibelle = '';
    this.image = null;
    this.listPieceJustificatif = [];
  }
}
