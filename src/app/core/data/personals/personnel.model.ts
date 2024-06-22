import {Cols} from "../primeng/primeng.model";


export let personnelColonneTable : Cols[] = [
  {field: 'photo', header: 'Photo'},
  {field: 'nni', header: 'NNI'},
  {field: 'matricule', header: 'Matricule'},
  {field: 'nomPrenom', header: 'Nom et prénom'},
  {field: 'nomPrenomArab', header: 'Nom et prénom Arab'},
  {field: 'tlphone', header: 'Téléphone'},
  {field: 'adressEmp', header: 'Adresse'},
  {field: 'lieuNaiss', header: 'Lieu naissance'},
  {field: 'dateNaiss', header: 'Date naissance'},
  {field: 'dteRecrutement', header: 'Date recrutement'},
  {field: 'dteTitularisation', header: 'Date titularisation'},
  {field: 'dteSortie', header: 'Date sortie'},
  {field: 'debutCntrat', header: 'Début contrat'},
  {field: 'finCntrat', header: 'Fin contrat'},
  {field: 'bank', header: 'Banque'},
  {field: 'codeBank', header: 'Code banque'},
  {field: 'numroCpte', header: 'Numéro compte'},
  {field: 'cleRib', header: 'Clé rib'},
  {field: 'dteSortie', header: 'Date Sortie'},
  {field: 'detacher', header: 'Détacher'},
  {field: 'ministerOrigine', header: 'Ministère origine'},
  {field: 'typeeducation', header: 'Type éducation'},
  {field: 'statusEmp', header: 'Statut employé'},
  {field: 'actifOrNot', header: 'Situation'}
];

/*
* Personnel model
*/
export interface Personnel{
  idAgent: number;
  matricule: string;
  nomPrenom: string;
  nomPrenomArab: string;
  nni: string;
  dteRecrutement: Date;
  dteTitularisation: Date;
  dteSortie: Date;
  statusEmp: string;
  tlphone: string;
  adressEmp: string;
  debutCntrat: Date;
  finCntrat: Date;
  dateNaiss: Date;
  lieuNaiss: string;
  actifOrNot: string;
  bank: string;
  codeBank: string;
  numroCpte: number;
  cleRib: string;
  detacher: string;
  ministerOrigine: string;
  typeeducation: TypeEducation;
  imagPers: File;
}

export type Personnels = Personnel[];

export interface TypeEducation{
  label: string;
}

export interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
