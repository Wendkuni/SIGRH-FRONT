// export interface Assurance {
//     id: number;
//   matricule: string;
//   nometprenom: string;
//   designation: string;
//   dateDebut: string;
//   dateFin: string;
//   etat: string;
//   nombredepersonne: number;
//   type: string;
// }

export interface Assurance {
    // Identifiant unique de l'assurance
    id: number;

    // Matricule de l'assuré
    matricule: string;

    // Nom et prénom de l'assuré
    nomPrenom: string;

    // Désignation de l'assurance
    designation: string;

    // Date de début de l'assurance
    dateDebut: string;

    // Date de fin de l'assurance
    dateFin: string;

    // État de l'assurance
    etat: string;

    // Nombre de personnes couvertes par l'assurance
    nombrePersonne: number;

    // Type d'assurance
    type: string;
}

//  import {PersonnelResponse} from "../personals/personnel.model";
//
// export interface Assurance {
//    idAssurances: number;
//    personnel: PersonnelResponse;
//    typeAssurance: string;
//    liblAssurance: string;
//    debutAssurance: Date;
//    finAssurance: Date;
//    etatAct: string;
//  }


export interface Agent {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  genre?: string;
  profession?: string;
  cni?: Date;
  pieces?: File | null;
  deleted?: boolean;
}
