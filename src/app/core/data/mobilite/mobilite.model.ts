import { Personnel } from '../personals/personnel.model';

export interface Mobilite {
  // Identifiant unique de la mobilité
  id: string;
  // Matricule de l'agent
  matricule: string;
  // Nom et prénom de l'agent
  nomPrenom: string;
  // Nature de la mobilité
  nature: string;
  // Dren de la mobilité
  dren: string;
  // Localite de la mobilité
  localite: string;
  // Moughataa de la mobilité
  moughataa: string;
  // Ecole de la mobilité
  ecole: string;
  // Note pedagogique de la mobilité
  notePedagogique: string;
  // Date de la mobilité
  dateEffet: string;
}

export interface PieceJustificatif {
  libelle: string;
  images: File;
}

export interface DemandeConvenancePersonnelle {
  idDemande: number;
  id: number;
  idUtilisateur: number;
  posteActuel: string;
  drenActuelle: string;
  zoneDemande1: string;
  zoneDemande2: string;
  zoneDemande3: string;
  zoneDemande4: string;
  zoneDemande5: string;
  ancieneteFonctionPublique: number;
  anciennetePosteActuel: number;
  noteInspectionPedagogique: number;
  noteEvaluationAdministrative: number;
  distinction: string;
  nombreEnfantsACharge: number;
  discriminationPositive: string;
  situationSanitaire: string;
  regroupementConjoint: string;
  autreSituationSociale: string;
  listPieceJustificatif: Array<PieceJustificatif>;
  sessionDemande: string;
  enregistre: boolean;
  envoyer: boolean;
  avisDren: string;
  decisionCommissionZone1: string;
  totalPoint: number;
  personnel: Personnel;
  annulerDemande: boolean;
}
export type DemandeConvenancePersonnelleList = DemandeConvenancePersonnelle[];

export type Permutation = {
  id:string;
  idDemandePermutation: number;
  idAgent: number;
  numDemande: string;
  matriculeCopermutant: string;
  matriculePermutant: string;
  lieuPermutation: string;
  listPieceJustificatifPermutant: Array<PieceJustificatif>;
  listPieceJustificatifCopermutant: Array<PieceJustificatif>;
  dateDemandePermutation: Date;
  enregistrerPermutant: boolean;
  envoyerPermutant: boolean;
  avisDrenPermutant: string;
  enregistreCopermutant: boolean;
  envoyerCopermutant: boolean;
  avisDrenCopermutant: string;
  annulerDemandePermutant: boolean;
  annulerDemandeCopermutant: boolean;
};

export type PermutationList = Permutation[];

export type AffectationBack = {
  idAffectation: number;
  personnel: Personnel;
  serviceEcole: string;
  dateEffet: Date;
  dren: string;
  notePedagogiq: string;
  nature: string;
  motif: string;
  situationSanit: string;
  nombreFant: number;
  ancieneteGen: number;
  anciennetePoste: number;
  posteOrrigin: string;
  posteDestina1: string;
  posteDestina2: string;
  posteDestina3: string;
  posteDestina4: string;
  posteDestina5: string;
  distinction: string;
  regroupementConjoint: string;
  autresSocial: string;
  noteAdministrative: number;
  situationMatrimo: string;
  etatAffect: string;
  pointPondere: number;
  autreDiplome: string;
  dateDemande: Date;
  destinationRetenue: string;
  appreciation: string;
};
