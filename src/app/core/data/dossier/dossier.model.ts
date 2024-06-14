import {Personnel} from "../personals/personnel.model";

export interface Dossier {
  idDossierScan: string; // Attribute name: id
  libelDossier: string; // Attribute name: nom
  dateUpload: Date; // Attribute name: date
  observvation: string; // Attribute name: observation
  personnel: Personnel
}
