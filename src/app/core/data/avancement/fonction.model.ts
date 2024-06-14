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

export interface Avancement{
  id:string,
    nature:string,
    corps: string;
    fonction: string,
    grade: string,
    echelle: string,
    echellon: string,
    dateEffet: Date
    idPersonnel: string
}

// Interface fonction agent on database
export interface Fonctionagent{
    IdFonctionAgent: bigint;
    IdAgent:bigint;
    fonctionLib: string;
    dateFonction: Date;
    echelle: string;
    echelon: string;
    groupeA: string;
    categoriA: string;
    corpsA: string;
    grade:string;
    indixe:string;
    corpsAarab: string;
    fonctionLiArab:string;
}


//  Interface fonction list
export interface fonctionliste{
    IdFonctionList: bigint;
    libFonctn:string;
    libFonctnArab:string;
    grade: string;
    echelle: string;
    salBase: GLfloat;
    indixe: string;
    echelon :string;
}
