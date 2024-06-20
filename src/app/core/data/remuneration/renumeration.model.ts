/*
 * Interface pour l'entité renumeration
 */
  import {Personnel} from "../personals/personnel.model";

export interface Remuneration{

    IdRemunerationAgent: number;
    dateEffet:Date;
    libelleBank: string;
    codeBank: string;
    valeurMontant: number;
    personnel: Personnel;

    }

export type Remunerations = Remuneration[];
