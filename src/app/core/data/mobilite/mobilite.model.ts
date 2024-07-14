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
}
export type DemandeConvenancePersonnelleList = DemandeConvenancePersonnelle[];
