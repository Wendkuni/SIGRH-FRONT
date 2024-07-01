import {Personnel} from "../personals/personnel.model";

export interface Mobilite {
  // Identifiant unique de la mobilité
  idAffectation: number;
  // Matricule de l'agent
  localite: string;
  // Nom et prénom de l'agent
  serviceEcole: string;
  // Nature de la mobilité
  dateEffet: string;
  // Dren de la mobilité
  dren: string;
  // Localite de la mobilité
  notePedagogiq: string;
  // // Moughataa de la mobilité
   moughataa: string;

   // personnel
   personnel: Personnel;

   //nature
  nature: string;

}

export type Mobilites = Mobilite[];

export interface Affectation {
  // idAffectation: number;
  // idPersonnel: number;
  // ancieneteGenerale: number;
  // noteInspectionPedagogique: number;
  // noteEvaluationPedagogique: number;
  // ancienetePoste: number;
  // distinction: string;
  // nbrEnfants: number;
  // zoneAffectation1: string;
  // zoneAffectation2: string;
  // zoneAffectation3: string;
  // discriminationPositive: string;
  // situationSanitaire: string;
  // regroupementConjoints: string;
  // autreSituationSociale: string;
  idAffectation: number;
  personnel: Personnel;
  nombreFant: number;
  ancieneteGen: number;
  ancienetePoste: number;
  posteDestinat1: string;
  posteDestinat2: string;
  posteDestinat3: string;
  notePedagogiq: number;
  motif: string;
  dateEffet: Date;
}