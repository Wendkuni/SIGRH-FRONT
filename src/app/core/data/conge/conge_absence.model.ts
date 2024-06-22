import {Personnel} from "../personals/personnel.model";

export interface Raison {
  nom: string;
}

export interface AbsenceEtConge{
  idAbsence: number;
  libelle: string;
  dateeffet: Date;
  raison: Raison;
  nbJour: number;
  motif: string;
  signataire: string;
  autorisation: string;
  personnel: Personnel;
}

export type AbsenceEtCongeList = AbsenceEtConge[];

export interface DemandeConge {
    // Identifiant unique de la demande de congé
    id: number;
    // Matricule de l'agent
  matricule: string;
  // Nom et prénom de l'agent
  nomPrenom: string;
    // Date de la demande
  dateEffet: Date;
  // Intervalle de congé
  intervalleConge: string;
    // Autorisation de la demande
  autorisation: string;
    // Raison de la demande
  raison: DemandeRaison;
    // Motif de la demande
  motif?: string;
  // Signataire de la demande
  signataire: string;
}

export enum DemandeAutorisation {
  EnCours = "Demande en cours",
  Rejetee = "Demande rejetée",
  Refusee = "Demande refusée"
}

export enum DemandeRaison {
  Absence = "Absence",
  Conge = "Congé",
  CongeViduite = "Congé Viduité",
  CongeMaladie = "Congé de maladie",
  CongeMaternite = "Congé de maternité",
  CongePelerinage = "Congé de pelerinage",
  Disponibilite = "Disponibilité",
  Detachement = "Détachement"
}
