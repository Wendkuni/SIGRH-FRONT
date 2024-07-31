export interface Dossier {
  idDossierScan?: number; // Attribute name: id
  libelDossier?: string; // Attribute name: nom
  dateUpload?: Date; // Attribute name: date
  observation?: string; // Attribute name: observation
  idAgent?: number; // Attribute name: idAgent
  imageFold?: File[];
}

export type Dossiers = Dossier[];
