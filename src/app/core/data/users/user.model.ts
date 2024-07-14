export interface Utilisateur {
  idAgent: number;
  matricule: string;
  nomPrenom: string;
  nomPrenomArab: string;
  nni: string;
  dteRecrutement: Date;
  dteTitularisation: Date;
  dteSortie: Date;
  dteNaiss: Date;
  statusEmp: string;
  tlphone: string;
  adressEmp: string;
  debutCntrat: Date;
  finCntrat: Date;
  grade: string;
  lieuNaiss: string;
  actifOrNot: boolean;
  bank: string;
  codeBank: string;
  numroCpte: string;
  cleRib: string;
  detacher: string;
  ministerOrigine: string;
  roles: string[];
}

export type Utilisateurs = Utilisateur[];
