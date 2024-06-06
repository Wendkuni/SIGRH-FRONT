export interface Fonction {
    // Identifiant unique de la fonction
    id: number;
    // Fonction de l'agent
  fonction: string;
    // Fonction de l'agent en arabe
  fonctionArabe: string;
    // Corps de l'agent
  corps: string;
    // Grade de l'agent
  grade: string;
    // Catégorie de l'agent
  categorie: string;
    // Echelon de l'agent
  echelon: string;
    // Indice de l'agent
  echelle: string;
    // Salaire de base de l'agent
  indice: string;
    // Salaire de base de l'agent
  salaireBase: string;
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
