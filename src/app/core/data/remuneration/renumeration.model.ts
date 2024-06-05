/*
 * Interface pour l'entité renumeration
 */
  export interface Remuneration{

    IdRemunerationAgent: bigint;
    // Id de l'agent (foreign key)
    IdAgent: bigint;
    // Valeur de la renumeration(Net à payer)
    valMnt: string;
    // Banque de l'agent(ou de la renumeration)
    bankLib:string;
    // Mois de la renumeration
    dateEffet:Date;

    }


    export interface RemunerationWithAgent{
      IdRemunerationAgent: bigint;
      valMnt: string;
      bankLib:string;
      dateEffet:Date;
      IdAgent: bigint;
    }

