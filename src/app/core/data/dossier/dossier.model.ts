import {Personnel} from "../personals/personnel.model";

export interface Dossier {
  idDossierScan: number; // Attribute name: id
  libelDossier: string; // Attribute name: nom
  dateUpload: Date; // Attribute name: date
  observation: string; // Attribute name: observation
  personnel: Personnel;
  imageFold: File[];
}

export type Dossiers = Dossier[];
