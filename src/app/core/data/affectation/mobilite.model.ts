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
  // moughataa: string;

}

export type Mobilites = Mobilite[];
