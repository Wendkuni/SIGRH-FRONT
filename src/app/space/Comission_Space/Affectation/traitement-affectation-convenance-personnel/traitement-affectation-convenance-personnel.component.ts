import {Component, inject} from '@angular/core';
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {ConfirmationService, MessageService, SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {AccordionModule} from "primeng/accordion";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {Personnel} from "../../../../core/data/personals/personnel.model";
import {ToolbarModule} from "primeng/toolbar";
import {DropdownModule} from "primeng/dropdown";
import {BadgeModule} from "primeng/badge";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'mrt-traitement-affectation-convenance-personnel',
  standalone: true,
    imports: [
        ButtonModule,
        CardModule,
        ConfirmDialogModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        TableModule,
        ToastModule,
        AccordionModule,
        DialogModule,
        DividerModule,
        ToolbarModule,
        DropdownModule,
        BadgeModule,
        TooltipModule
    ],
  templateUrl: './traitement-affectation-convenance-personnel.component.html',
  styleUrl: './traitement-affectation-convenance-personnel.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TraitementAffectationConvenancePersonnelComponent {

  selectDemande!: any;
  convenancePersonnelDialogShow: boolean = false;
  traitementDialogeShow: boolean = false;
  // colonne du tableau
  colsDossierSortant: Cols[] = [
    { field: 'N°', header: 'N°' },
    { field: 'nbrPoint', header: 'Nombre de Point' },
    { field: 'matricule', header: 'Matricule' },
    { field: 'nomPrenom', header: 'Nom et Prénoms' },
    { field: 'nni', header: 'NNI' },
    { field: 'dren', header: 'Dren' },
    { field: 'poste', header: 'Poste actuel' },
    { field: 'choix1', header: 'Choix 1' },
    { field: 'choix2', header: 'Choix 2' },
    { field: 'choix3', header: 'Choix 3' },
    { field: 'choix4', header: 'Choix 4' },
    { field: 'choix5', header: 'Choix 5' },
    { field: 'ancieneteGenerale', header: 'Ancienneté Générale' },
    { field: 'noteAdministrative', header: 'Note Administrative' },
    { field: 'notePedagogique', header: 'Note Pédagogique' },
    { field: 'anciennetePoste', header: 'Ancienneté Wilaya' },
    { field: 'distinction', header: 'Distinction' },
    { field: 'nbrEnfant', header: "Nombre d'enfants" },
    { field: 'discrimination', header: 'Discrimination Positive' },
    { field: 'situationSanitaire', header: 'Situation Sanitaire' },
    { field: 'regroupementConjoint', header: 'Regroupement Conjoint' },
    { field: 'autreSituationSociale', header: 'Autre Situation Sociale' },
  ];
  // données du tableau
  tableDataDossierSortant: any[] = [
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
    },
    {
      n: 2,
      nbrPoint: 79,
      Matricule: '54321',
      nomPrenom: 'Marie Martin',
      nni: '56789012',
      grade: 'Technicien',
      option: 'Électronique',
      lieu: 'Lyon',
      position: 'Junior',
      ancieneteGenerale: '5 ans',
      anciennetePoste: '2 ans',
      noteAdministrative: 15,
      notePedagogique: 14,
      situationFamiliale: 'Célibataire',
      nbrEnfant: 0,
      situationSanitaire: 'Bon',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: "Mission à l'étranger",
      choix4: 'Travail à distance',
      choix5: 'Réduction de temps de travail',
    },
    {
      n: 3,
      nbrPoint: 70,
      Matricule: '67890',
      nomPrenom: 'Pierre Durand',
      nni: '90123456',
      grade: 'Ouvrier',
      option: 'Maçonnerie',
      lieu: 'Marseille',
      position: 'Senior',
      ancieneteGenerale: '10 ans',
      anciennetePoste: '4 ans',
      noteAdministrative: 13,
      notePedagogique: 12,
      situationFamiliale: 'Divorcé(e)',
      nbrEnfant: 1,
      situationSanitaire: 'Moyen',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: 'Promotion interne',
      choix3: 'Réduction de temps de travail',
      choix4: 'Travail à distance',
      choix5: "Mission à l'étranger",
    },
    {
      n: 4,
      nbrPoint: 65,
      Matricule: '09876',
      nomPrenom: 'Sophie Dubois',
      nni: '34567890',
      grade: 'Cadre',
      option: 'Ressources Humaines',
      lieu: 'Toulouse',
      position: 'Junior',
      ancieneteGenerale: '3 ans',
      anciennetePoste: '1 an',
      noteAdministrative: 11,
      notePedagogique: 10,
      situationFamiliale: 'Veuf(ve)',
      nbrEnfant: 3,
      situationSanitaire: 'Moyen',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: 'Travail à distance',
      choix4: 'Réduction de temps de travail',
      choix5: "Mission à l'étranger",
    },
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
    },
    {
      n: 2,
      nbrPoint: 79,
      Matricule: '54321',
      nomPrenom: 'Marie Martin',
      nni: '56789012',
      grade: 'Technicien',
      option: 'Électronique',
      lieu: 'Lyon',
      position: 'Junior',
      ancieneteGenerale: '5 ans',
      anciennetePoste: '2 ans',
      noteAdministrative: 15,
      notePedagogique: 14,
      situationFamiliale: 'Célibataire',
      nbrEnfant: 0,
      situationSanitaire: 'Bon',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: "Mission à l'étranger",
      choix4: 'Travail à distance',
      choix5: 'Réduction de temps de travail',
    },
    {
      n: 3,
      nbrPoint: 70,
      Matricule: '67890',
      nomPrenom: 'Pierre Durand',
      nni: '90123456',
      grade: 'Ouvrier',
      option: 'Maçonnerie',
      lieu: 'Marseille',
      position: 'Senior',
      ancieneteGenerale: '10 ans',
      anciennetePoste: '4 ans',
      noteAdministrative: 13,
      notePedagogique: 12,
      situationFamiliale: 'Divorcé(e)',
      nbrEnfant: 1,
      situationSanitaire: 'Moyen',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: 'Promotion interne',
      choix3: 'Réduction de temps de travail',
      choix4: 'Travail à distance',
      choix5: "Mission à l'étranger",
    },
    {
      n: 4,
      nbrPoint: 65,
      Matricule: '09876',
      nomPrenom: 'Sophie Dubois',
      nni: '34567890',
      grade: 'Cadre',
      option: 'Ressources Humaines',
      lieu: 'Toulouse',
      position: 'Junior',
      ancieneteGenerale: '3 ans',
      anciennetePoste: '1 an',
      noteAdministrative: 11,
      notePedagogique: 10,
      situationFamiliale: 'Veuf(ve)',
      nbrEnfant: 3,
      situationSanitaire: 'Moyen',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: 'Travail à distance',
      choix4: 'Réduction de temps de travail',
      choix5: "Mission à l'étranger",
    },
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
    },
    {
      n: 2,
      nbrPoint: 79,
      Matricule: '54321',
      nomPrenom: 'Marie Martin',
      nni: '56789012',
      grade: 'Technicien',
      option: 'Électronique',
      lieu: 'Lyon',
      position: 'Junior',
      ancieneteGenerale: '5 ans',
      anciennetePoste: '2 ans',
      noteAdministrative: 15,
      notePedagogique: 14,
      situationFamiliale: 'Célibataire',
      nbrEnfant: 0,
      situationSanitaire: 'Bon',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: "Mission à l'étranger",
      choix4: 'Travail à distance',
      choix5: 'Réduction de temps de travail',
    },
    {
      n: 3,
      nbrPoint: 70,
      Matricule: '67890',
      nomPrenom: 'Pierre Durand',
      nni: '90123456',
      grade: 'Ouvrier',
      option: 'Maçonnerie',
      lieu: 'Marseille',
      position: 'Senior',
      ancieneteGenerale: '10 ans',
      anciennetePoste: '4 ans',
      noteAdministrative: 13,
      notePedagogique: 12,
      situationFamiliale: 'Divorcé(e)',
      nbrEnfant: 1,
      situationSanitaire: 'Moyen',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: 'Promotion interne',
      choix3: 'Réduction de temps de travail',
      choix4: 'Travail à distance',
      choix5: "Mission à l'étranger",
    },
    {
      n: 4,
      nbrPoint: 65,
      Matricule: '09876',
      nomPrenom: 'Sophie Dubois',
      nni: '34567890',
      grade: 'Cadre',
      option: 'Ressources Humaines',
      lieu: 'Toulouse',
      position: 'Junior',
      ancieneteGenerale: '3 ans',
      anciennetePoste: '1 an',
      noteAdministrative: 11,
      notePedagogique: 10,
      situationFamiliale: 'Veuf(ve)',
      nbrEnfant: 3,
      situationSanitaire: 'Moyen',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: 'Travail à distance',
      choix4: 'Réduction de temps de travail',
      choix5: "Mission à l'étranger",
    },
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
    },
    {
      n: 2,
      nbrPoint: 79,
      Matricule: '54321',
      nomPrenom: 'Marie Martin',
      nni: '56789012',
      grade: 'Technicien',
      option: 'Électronique',
      lieu: 'Lyon',
      position: 'Junior',
      ancieneteGenerale: '5 ans',
      anciennetePoste: '2 ans',
      noteAdministrative: 15,
      notePedagogique: 14,
      situationFamiliale: 'Célibataire',
      nbrEnfant: 0,
      situationSanitaire: 'Bon',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: "Mission à l'étranger",
      choix4: 'Travail à distance',
      choix5: 'Réduction de temps de travail',
    },
    {
      n: 3,
      nbrPoint: 70,
      Matricule: '67890',
      nomPrenom: 'Pierre Durand',
      nni: '90123456',
      grade: 'Ouvrier',
      option: 'Maçonnerie',
      lieu: 'Marseille',
      position: 'Senior',
      ancieneteGenerale: '10 ans',
      anciennetePoste: '4 ans',
      noteAdministrative: 13,
      notePedagogique: 12,
      situationFamiliale: 'Divorcé(e)',
      nbrEnfant: 1,
      situationSanitaire: 'Moyen',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: 'Promotion interne',
      choix3: 'Réduction de temps de travail',
      choix4: 'Travail à distance',
      choix5: "Mission à l'étranger",
    },
    {
      n: 4,
      nbrPoint: 65,
      Matricule: '09876',
      nomPrenom: 'Sophie Dubois',
      nni: '34567890',
      grade: 'Cadre',
      option: 'Ressources Humaines',
      lieu: 'Toulouse',
      position: 'Junior',
      ancieneteGenerale: '3 ans',
      anciennetePoste: '1 an',
      noteAdministrative: 11,
      notePedagogique: 10,
      situationFamiliale: 'Veuf(ve)',
      nbrEnfant: 3,
      situationSanitaire: 'Moyen',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: 'Travail à distance',
      choix4: 'Réduction de temps de travail',
      choix5: "Mission à l'étranger",
    },
    {
      n: 1,
      nbrPoint: 85,
      Matricule: '12345',
      nomPrenom: 'Jean Dupont',
      nni: '78901234',
      grade: 'Ingénieur',
      option: 'Informatique',
      lieu: 'Paris',
      position: 'Senior',
      ancieneteGenerale: '7 ans',
      anciennetePoste: '3 ans',
      noteAdministrative: 17,
      notePedagogique: 16,
      situationFamiliale: 'Marié(e)',
      nbrEnfant: 2,
      situationSanitaire: 'Bon',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: "Mission à l'étranger",
      choix3: 'Promotion interne',
      choix4: 'Réduction de temps de travail',
      choix5: 'Travail à distance',
    },
    {
      n: 2,
      nbrPoint: 79,
      Matricule: '54321',
      nomPrenom: 'Marie Martin',
      nni: '56789012',
      grade: 'Technicien',
      option: 'Électronique',
      lieu: 'Lyon',
      position: 'Junior',
      ancieneteGenerale: '5 ans',
      anciennetePoste: '2 ans',
      noteAdministrative: 15,
      notePedagogique: 14,
      situationFamiliale: 'Célibataire',
      nbrEnfant: 0,
      situationSanitaire: 'Bon',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: "Mission à l'étranger",
      choix4: 'Travail à distance',
      choix5: 'Réduction de temps de travail',
    },
    {
      n: 3,
      nbrPoint: 70,
      Matricule: '67890',
      nomPrenom: 'Pierre Durand',
      nni: '90123456',
      grade: 'Ouvrier',
      option: 'Maçonnerie',
      lieu: 'Marseille',
      position: 'Senior',
      ancieneteGenerale: '10 ans',
      anciennetePoste: '4 ans',
      noteAdministrative: 13,
      notePedagogique: 12,
      situationFamiliale: 'Divorcé(e)',
      nbrEnfant: 1,
      situationSanitaire: 'Moyen',
      genre: 'Homme',
      choix1: 'Formation continue',
      choix2: 'Promotion interne',
      choix3: 'Réduction de temps de travail',
      choix4: 'Travail à distance',
      choix5: "Mission à l'étranger",
    },
    {
      n: 4,
      nbrPoint: 65,
      Matricule: '09876',
      nomPrenom: 'Sophie Dubois',
      nni: '34567890',
      grade: 'Cadre',
      option: 'Ressources Humaines',
      lieu: 'Toulouse',
      position: 'Junior',
      ancieneteGenerale: '3 ans',
      anciennetePoste: '1 an',
      noteAdministrative: 11,
      notePedagogique: 10,
      situationFamiliale: 'Veuf(ve)',
      nbrEnfant: 3,
      situationSanitaire: 'Moyen',
      genre: 'Femme',
      choix1: 'Promotion interne',
      choix2: 'Formation spécialisée',
      choix3: 'Travail à distance',
      choix4: 'Réduction de temps de travail',
      choix5: "Mission à l'étranger",
    },
  ];

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  choice: any[] = [];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  visualiserDemandeConvenancePersonnelle(dmd: any) {
      this.convenancePersonnelDialogShow=true;
      this.selectDemande = dmd;
      this.selectDemande.personnel = {} as Personnel;
  }

  onHideDialog(){
    this.convenancePersonnelDialogShow = false;
    this.traitementDialogeShow = false;
    this.selectDemande = null;
  }

  traitementDialog() {
    this.traitementDialogeShow = true;
  }
}
