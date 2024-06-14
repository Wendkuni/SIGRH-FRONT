import {Cols} from "../primeng/primeng.model";


export let personnelColonneTable : Cols[] = [
    {field: 'photo', header: 'Photo'},
    {field: 'nni', header: 'NNI'},
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomEtPrenom', header: 'Nom et prénom'},
    {field: 'nomPrenomArab', header: 'Nom et prénom Arab'},
    {field: 'tlphone', header: 'Téléphone'},
    {field: 'adrssEmp', header: 'Adresse'},
    {field: 'lieuNaiss', header: 'Lieu naissance'},
    {field: 'dteNaiss', header: 'Date naissance'},
    {field: 'dteRerutmnt', header: 'Date recrutement'},
    {field: 'dteTitularisation', header: 'Date titularisation'},
    {field: 'debuCntrat', header: 'Début contrat'},
    {field: 'finCntrat', header: 'Fin contrat'},
    {field: 'bank', header: 'Banque'},
    {field: 'codBank', header: 'Code banque'},
    {field: 'numroCpte', header: 'Numéro compte'},
    {field: 'cleRib', header: 'Clé rib'},
    {field: 'detacher', header: 'Détacher'},
    {field: 'ministereOrigine', header: 'Ministère origine'},
    {field: 'typeEducation', header: 'Type éducation'},
    {field: 'statusEmp', header: 'Statut employé'},
    {field: 'actifOrNot', header: 'Situation'}
];

// Personnel model on database
export interface Personnel{
    idAgent: bigint;
    matricule: string;
  nni: string;
    nomPrenom: string;
    nomPrenomArab: string;
    dateNaiss: Date;
    tlphone: string;
    adrssEmp: string;
    lieuNaiss: string;
    dteRecrutmnt: Date;
    dteTitularisation: Date;
    debuCntrat: Date;
  finCntrat: Date;
  bank: string;
  codBank: string;
  numroCpte: string;
  cleRib: string;
  detacher: string;
  ministereOrigne: string;
  typeEducation: string;
  statusEmp: string;
  actifOrNnot: boolean;
  dteSortie: Date;
    photo: string;
}
