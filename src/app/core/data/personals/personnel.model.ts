import {Cols} from "../primeng/primeng.model";


export let personnelColonneTable : Cols[] = [
    {field: 'photo', header: 'Photo'},
    {field: 'nni', header: 'NNI'},
    {field: 'matricule', header: 'Matricule'},
    {field: 'nometprenom', header: 'Nom et prénom'},
    {field: 'nometprenomarab', header: 'Nom et prénom Arab'},
    {field: 'tlphone', header: 'Téléphone'},
    {field: 'adrssemp', header: 'Adresse'},
    {field: 'dtenaiss', header: 'Date naissance'},
    {field: 'lieunaiss', header: 'Lieu naissance'},
    {field: 'dterecrutmnt', header: 'Date recrutement'},
    {field: 'dtetitularisation', header: 'Date titularisation'},
    {field: 'debucntrat', header: 'Début contrat'},
    {field: 'fincntrat', header: 'Fin contrat'},
    {field: 'bank', header: 'Banque'},
    {field: 'codbank', header: 'Code banque'},
    {field: 'numrocpte', header: 'Numéro compte'},
    {field: 'clerib', header: 'Clé rib'},
    {field: 'detacher', header: 'Détacher'},
    {field: 'ministereorigine', header: 'Ministère origine'},
    {field: 'Typeeducation', header: 'Type éducation'},
    {field: 'statusemp', header: 'Statut employé'},
    {field: 'actifornot', header: 'Situation'}
];

export interface PersonnelRequest {

    // Matricule du personnel (probablement une chaîne de caractères)
    matricule: string;

  photo: string;

    // Numéro d'identification nationale (probablement une chaîne de caractères)
    nni: string;

    // Nom et prénom en caractères latins (probablement une chaîne de caractères)
    nomPrenom: string;

    // Nom et prénom en caractères arabes (probablement une chaîne de caractères)
    nomPrenomArab: string;

    // Statut actif ou inactif (probablement une chaîne de caractères)
    actifOrNot: string;

    // Date de recrutement (probablement un objet Date)
    dteRecrutemnt: Date;

    // Date de titularisation (probablement un objet Date)
    dteTitularisation: Date;

    // Date de départ (probablement un objet Date, ou null si toujours employé)
    dteDepart: Date;

    // Statut d'emploi (probablement une chaîne de caractères)
    statusEmp: string;

    // Numéro de téléphone (probablement une chaîne de caractères)
    tlphone: string;

    // Adresse du personnel (probablement une chaîne de caractères)
    adressEmp: string;

    // Date de début du contrat (probablement un objet Date)
    debutCntrat: Date;

    // Date de fin du contrat (probablement un objet Date, ou null si indéterminé)
    finCntrat: Date;

    // Date de naissance (probablement un objet Date)
    dteNaiss: Date;

    // Lieu de naissance (probablement une chaîne de caractères)
    lieuNaiss: string;

    // Nom de la banque (probablement une chaîne de caractères)
    bank: string;

    // Code banque (probablement une chaîne de caractères)
    codBank: string;

    // Numéro de compte (probablement une chaîne de caractères)
    numroCpte: string;

    // RIB (probablement une chaîne de caractères, si applicable)
    cleRib: string;

    // Indique si détaché du ministère d'origine (probablement une chaîne de caractères)
    detacher: string;

    // Ministère d'origine (probablement une chaîne de caractères, si applicable)
    ministereOrigine: string;

    // Type d'éducation (probablement une chaîne de caractères)
    typeEducation: string;
}

export interface PersonnelResponse {
    // Identifiant unique du dossier personnel (probablement une chaîne de caractères)
    id: string;

  photo: string;

  // Matricule du personnel (probablement une chaîne de caractères)
  matricule: string;

  // Numéro d'identification nationale (probablement une chaîne de caractères)
  nni: string;

  // Nom et prénom en caractères latins (probablement une chaîne de caractères)
  nomPrenom: string;

  // Nom et prénom en caractères arabes (probablement une chaîne de caractères)
  nomPrenomArab: string;

  // Statut actif ou inactif (probablement une chaîne de caractères)
  actifOrNot: string;

  // Date de recrutement (probablement un objet Date)
  dteRecrutemnt: Date;

  // Date de titularisation (probablement un objet Date)
  dteTitularisation: Date;

  // Date de départ (probablement un objet Date, ou null si toujours employé)
  dteDepart: Date;

  // Statut d'emploi (probablement une chaîne de caractères)
  statusEmp: string;

  // Numéro de téléphone (probablement une chaîne de caractères)
  tlphone: string;

  // Adresse du personnel (probablement une chaîne de caractères)
  adressEmp: string;

  // Date de début du contrat (probablement un objet Date)
  debutCntrat: Date;

  // Date de fin du contrat (probablement un objet Date, ou null si indéterminé)
  finCntrat: Date;

  // Date de naissance (probablement un objet Date)
  dteNaiss: Date;

  // Lieu de naissance (probablement une chaîne de caractères)
  lieuNaiss: string;

  // Nom de la banque (probablement une chaîne de caractères)
  bank: string;

  // Code banque (probablement une chaîne de caractères)
  codBank: string;

  // Numéro de compte (probablement une chaîne de caractères)
  numroCpte: string;

  // RIB (probablement une chaîne de caractères, si applicable)
  cleRib: string;

  // Indique si détaché du ministère d'origine (probablement une chaîne de caractères)
  detacher: string;

  // Ministère d'origine (probablement une chaîne de caractères, si applicable)
  ministereOrigine: string;

  // Type d'éducation (probablement une chaîne de caractères)
  typeEducation: string;

}



// Personnel model on database
export interface Personnel{
    idAgent: bigint;
    matricule: string;
  photo: string;
    dteTitularisation: Date;
    dteSortie: Date;
    statusEmp: string;
    tlphone: string;
    adrssEmp: string;
    debuCntrat: Date;
    finCntrat: Date;
    nomPrenom: string;
    dateNaiss: string;
    actifOrNnot: boolean;
    nni: string;
    bank: string;
    numroCpte: string;
    lieuNaiss: string;
    typeEducation: string;
    dteRecrutmnt: Date;
    detacher: string;
    ministerOrigne: string;
    clerib: string;
    codBank: string;
    nomPrenomArab: string;
}
