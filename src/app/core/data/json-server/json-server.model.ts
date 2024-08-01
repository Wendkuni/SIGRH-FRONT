export interface BesoinPersonnel {
  idBesoinPersonnel: number;
  structure: string;
  profile: string;
  discipline: string;
  dateBesoin: Date;
  nbrPostes: number;
}


interface AgentJson {
  IDagent: number;
  matricul?: string;
  dtetitularisation?: string;
  dtesortie?: string;
  statusemp?: string;
  tlphone?: string;
  adrssemp?: string;
  debucntrat?: string;
  fincntrat?: string;
  nometprenom?: string;
  datenaiss?: string;
  actifornot?: string;
  nni: string;
  bank?: string;
  numrocpte?: string;
  lieunaiss?: string;
  Typeeducation?: string;
  dterecrutmnt?: string;
  detacher?: string;
  ministerorigne?: string;
  clerib?: string;
  codbank?: string;
  nometprenomarab?: string;
  imgpers?: string;
  sexepers?: string;
  situationmatri?: string;
  autres?: string;
  autres2?: string;
  corpsrecrt?: string;
  typef?: string;
  refrec?: string;
  fonctnref?: string;
  dateintegreatition?: string;
  saliareprestataire?: string;
}
