import {Personnel} from "../personals/personnel.model";

export interface Fonction {
    // Identifiant unique de la fonction
  idFonction: number;
  // PersonnelModel
  personnel: Personnel;
  // Libellé de la fonction
  libelleFonction: string;
  // Echelle de la fonction
  echelle: string;
  // Echelon de la fonction
  echelon: string;
  // Catégorie de la fonction
  categorie: string;
  // Groupe de la fonction
  groupe: string;
  // Corps de la fonction
  corps: string;
//   Grade de la fonction
  grade: string;
  // Date Debut de la fonction
  dateDebFonction: Date;
  // Corps Arab de la fonction
  corpsArab: string;
  // Libellé de la fonction en arabe
  libelleFonctionArab: string;
  // Indice de la fonction
  indice: string;
}

export type Fonctions = Fonction[];
