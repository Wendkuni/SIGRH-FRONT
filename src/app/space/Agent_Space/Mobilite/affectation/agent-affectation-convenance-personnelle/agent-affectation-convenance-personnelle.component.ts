import {Component, inject, OnInit} from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {RippleModule} from 'primeng/ripple';
import {Table, TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TooltipModule} from 'primeng/tooltip';
import {FormValidatorsComponent} from '../../../../../shared/form-validators/form-validators.component';
import {AgentFormDetailsViewComponent} from '../../agent-form-details-view/agent-form-details-view.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AffectationService} from '../../../../../core/data/affectation/affectation.service';
import {
  AffectationBack,
  DemandeConvenancePersonnelle,
  DemandeConvenancePersonnelleList,
} from '../../../../../core/data/mobilite/mobilite.model';
import {Personnel,} from '../../../../../core/data/personals/personnel.model';
import {PersonnelService} from '../../../../../core/data/personals/personnel.service';
import {Cols} from '../../../../../core/data/primeng/primeng.model';
import {BadgeModule} from 'primeng/badge';
import {Dossier} from "../../../../../core/data/dossier/dossier.model";

@Component({
  selector: 'mrt-agent-affectation-convenance-personnelle',
  standalone: true,
  templateUrl: './agent-affectation-convenance-personnelle.component.html',
  imports: [
    TabViewModule,
    CardModule,
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
    FormValidatorsComponent,
    BadgeModule,
  ],
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
    }`,
  providers: [MessageService, ConfirmationService],
})
export class AgentAffectationConvenancePersonnelleComponent implements OnInit {

  activeIndex: number = 0; // index de l'onglet actif

  action: string = 'Add'; // index de l'onglet actif
  image!: any;
  // injection du formBuilder
  fb = inject(FormBuilder);
  // Service mobilite
  mobiliteService = inject(AffectationService);
  confirmationService = inject(ConfirmationService);

  pieceLibelle: string = '';

  selectZoneAffectation1: string = '';

  messageService = inject(MessageService);

  personnelService = inject(PersonnelService);

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  listeDemande: DemandeConvenancePersonnelleList = [];

  demandeObject: DemandeConvenancePersonnelle =
    {} as DemandeConvenancePersonnelle;

  listPieceJustificatif = Array<Dossier>();

  selectedDemande: DemandeConvenancePersonnelle =
    {} as DemandeConvenancePersonnelle;

  // colonne du tableau
  colDemandeEnAttente: Cols[] = [
    {field: 'num', header: 'N° Demande'},
    {field: 'choix1', header: 'Choix 1'},
    {field: 'choix2', header: 'Choix 2'},
    {field: 'choix3', header: 'Choix 3'},
    {field: 'choix4', header: 'Choix 4'},
    {field: 'choix5', header: 'Choix 5'},
    {field: 'piece', header: 'Pièce(s) jointe(s)'},
  ];

  // colonne du tableau
  colsDossier: Cols[] = [
    {field: 'libelle', header: 'Libellé de la pièce'},
    {field: 'images', header: 'Images'},
  ];


  // Nombre d'enfants
  nbrEnfantsOptions = ['Moins de 5 enfants', '5 enfants et plus'];

  // Ancienneté
  ancieneteList = ['Moins de 15 ans', '15 ans et plus'];

  // Distinction
  listeDistinction = ['Nationale', 'Régionale', 'Départementale'];


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
      posteActuel: this.fb.control('', [Validators.required]),
      drenActuelle: this.fb.control('', [Validators.required]),
      // zoneDemande1: this.fb.control('', [Validators.required]),
      zoneDemande2: this.fb.control('', [Validators.required]),
      zoneDemande3: this.fb.control('', [Validators.required]),
      zoneDemande4: this.fb.control('', [Validators.required]),
      zoneDemande5: this.fb.control('', [Validators.required]),
      ancieneteFonctionPublique: this.fb.control('', [
        Validators.required,
        Validators.min(3),
        Validators.max(100),
      ]),
      anciennetePosteActuel: this.fb.control('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]),
      noteInspectionPedagogique: this.fb.control('', [
        Validators.required,
        Validators.min(0),
      ]),
      noteEvaluationAdministrative: this.fb.control('', [
        Validators.required,
        Validators.min(0),
      ]),
      distinction: this.fb.control(''),
      nombreEnfantsACharge: this.fb.control('', [
        Validators.required,
        Validators.min(0),
      ]),
      discriminationPositive: this.fb.control(''),
      situationSanitaire: this.fb.control(''),
      regroupementConjoint: this.fb.control(''),
      autreSituationSociale: this.fb.control(''),
    });
    this.getAgentDemandeConvenancePersonnelle();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
  }

  removeFile() {
    this.image = null;
  }

  convertToBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    })
  }

  ajouter() {
    if (this.image != null && this.pieceLibelle != '') {
      this.listPieceJustificatif.push({
        libelDossier: this.pieceLibelle,
        imageFold: this.image,
        idAgent: this.selectedPersonnel.idAgent,
        dateUpload: new Date()
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
      accept: () => {
        if (this.action === 'Add') {
          this.createAffectationBack();
          // this.createAffectation();
        } else {
          this.updateAffectation();
        }
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          detail: 'Vous avez annuler',
          life: 3000,
        });
      },
    });
  }  // createAffectation() {
  //   const data = this.getFormData();
  //   data.idUtilisateur = this.selectedPersonnel.idAgent;
  //   data.listPieceJustificatif = this.listPieceJustificatif;
  //   this.mobiliteService.addDemandeConvenancePersonnelle(data).subscribe(
  //     () => {
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Succès',
  //         detail: 'Affectation enregistrée avec succès',
  //       });
  //       this.getAgentDemandeConvenancePersonnelle();
  //       this.cancelMobilite();
  //     },
  //     () => {
  //       this.messageService.add({
  //         severity: 'error',
  //         summary: 'Error',
  //         detail: 'Affectation non enregistrée',
  //         life: 3000,
  //       });
  //     }
  //   );
  // }


  createAffectationBack() {
    const data = this.getFormDataBack();
    data.personnel = {
      idAgent: this.selectedPersonnel.idAgent,
      matricule: this.selectedPersonnel.matricule,
      nomPrenom: this.selectedPersonnel.nomPrenom,
      nomPrenomArab: this.selectedPersonnel.nomPrenomArab,
      nni: this.selectedPersonnel.nni,
      dteRecrutement: this.selectedPersonnel.dteRecrutement,
      dteTitularisation: this.selectedPersonnel.dteTitularisation,
      dteSortie: this.selectedPersonnel.dteSortie,
      statusEmp: this.selectedPersonnel.statusEmp,
      tlphone: this.selectedPersonnel.tlphone,
      adressEmp: this.selectedPersonnel.adressEmp,
      debutCntrat: this.selectedPersonnel.debutCntrat,
      finCntrat: this.selectedPersonnel.finCntrat,
      dateNaiss: this.selectedPersonnel.dateNaiss,
      lieuNaiss: this.selectedPersonnel.lieuNaiss,
      actifOrNot: this.selectedPersonnel.actifOrNot,
      bank: this.selectedPersonnel.bank,
      codeBank: this.selectedPersonnel.codeBank,
      numroCpte: this.selectedPersonnel.numroCpte,
      cleRib: this.selectedPersonnel.cleRib,
      detacher: this.selectedPersonnel.detacher,
      ministerOrigine: this.selectedPersonnel.ministerOrigine,
    } as Personnel;
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
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Affectation non enregistrée',
            life: 3000,
          });
        }
      );
  }

  getFormData(): DemandeConvenancePersonnelle {
    const formData = this.affectationForm.value;
    return <DemandeConvenancePersonnelle>{
      posteActuel: formData.posteActuel,
      drenActuelle: formData.drenActuelle,
      zoneDemande1: this.demandeObject.zoneDemande1,
      zoneDemande2: formData.zoneDemande2,
      zoneDemande3: formData.zoneDemande3,
      zoneDemande4: formData.zoneDemande4,
      zoneDemande5: formData.zoneDemande5,
      ancieneteFonctionPublique: formData.ancieneteFonctionPublique,
      anciennetePosteActuel: formData.anciennetePosteActuel,
      noteInspectionPedagogique: formData.noteInspectionPedagogique,
      noteEvaluationAdministrative: formData.noteEvaluationAdministrative,
      distinction: formData.distinction,
      nombreEnfantsACharge: formData.nombreEnfantsACharge,
      discriminationPositive: formData.discriminationPositive,
      situationSanitaire: formData.situationSanitaire,
      regroupementConjoint: formData.regroupementConjoint,
      autreSituationSociale: formData.autreSituationSociale,
      sessionDemande: '2021',
      enregistre: true,
      envoyer: false,
      avisDren: '',
      decisionCommissionZone1: '',
      totalPoint: 0,
    };
  }

  getFormDataBack(): AffectationBack {
    const formData = this.affectationForm.value;
    return <AffectationBack>{
      personnel: this.selectedPersonnel,
      dren: formData.drenActuelle,
      notePedagogiq: formData.noteInspectionPedagogique,
      situationSanit: formData.situationSanitaire,
      nombreFant: formData.nombreEnfantsACharge,
      ancieneteGen: formData.ancieneteFonctionPublique,
      anciennetePoste: formData.anciennetePosteActuel,
      posteOrrigin: formData.posteActuel,
      posteDestina1: this.selectZoneAffectation1,
      posteDestina2: formData.zoneDemande2,
      posteDestina3: formData.zoneDemande3,
      posteDestina4: formData.zoneDemande4,
      posteDestina5: formData.zoneDemande5,
      distinction: formData.discriminationPositive,
      regroupementConjoint: formData.regroupementConjoint,
      autresSocial: formData.autreSituationSociale,
      noteAdministrative: formData.noteEvaluationAdministrative,
    };
  }

  onEdit(dmd: any) {
    this.activeIndex = 0;
    this.action = 'Edit';
    this.selectedDemande = dmd;
    this.affectationForm.patchValue(this.selectedDemande);
    this.listPieceJustificatif = dmd.listPieceJustificatif;
  }

  updateAffectation() {
    const data = this.getFormData();
    data.id = this.selectedDemande.id;
    data.listPieceJustificatif = this.listPieceJustificatif;
    data.idUtilisateur = this.selectedPersonnel.idAgent;
    this.mobiliteService.updateDemandeConvenancePersonnelle(data).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Affectation modifiée avec succès',
          life: 3000,
        });
        this.cancelMobilite();
        this.getAgentDemandeConvenancePersonnelle();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Affectation non modifiée',
          life: 3000,
        });
      }
    );
  }

  // Methode pour fermer la vue du formulaire
  cancelMobilite() {
    this.affectationForm.reset();
    this.pieceLibelle = '';
    this.image = null;
    this.listPieceJustificatif = [];
  }

  getAgentDemandeConvenancePersonnelle() {
    this.mobiliteService
      .getAllDemandeConvenancePersonnelle()
      .subscribe((response) => {
        response.forEach((element) => {
          if (
            element.idUtilisateur === this.selectedPersonnel.idAgent && !element.envoyer && !element.annulerDemande
          ) {
            this.listeDemande.push(element);
          }
        });
      });
  }

  envoyerDemande(dmd: DemandeConvenancePersonnelle) {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment envoyer cette demande ?',
      accept: () => {
        dmd.envoyer = true;
        this.mobiliteService.updateDemandeConvenancePersonnelle(dmd).subscribe(
          () => {
            this.getAgentDemandeConvenancePersonnelle();
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Demande envoyée avec succès',
              life: 3000,
            });
          },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Demande non envoyée',
              life: 3000,
            });
          }
        );
      },
    });
  }

  annulerDemande(dmd: DemandeConvenancePersonnelle) {
    this.confirmationService.confirm({
      message:
        "Voulez-vous vraiment annuler cette demande ? Auccun retour n'est possible !",
      accept: () => {
        dmd.annulerDemande = true;
        this.mobiliteService
          .updateDemandeConvenancePersonnelle(dmd)
          .subscribe(() => {
            this.getAgentDemandeConvenancePersonnelle();
            this.messageService.add({
              severity: 'success',
              summary: 'Succès',
              detail: 'Demande annulée avec succès',
              life: 3000,
            });
          });
      },
    });
  }
}
