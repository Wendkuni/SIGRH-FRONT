import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { AbsenceEtConge, AbsenceEtCongeList,  DemandeConge} from "./conge_absence.model";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CongeService {


  // url du server Json
  url = environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);

  // get all demandes
  getAll(){
    return this.http.get<AbsenceEtCongeList>(`${this.url}/absences`);
  }

// get demande by id
  findById(id: number){
    return this.http.get<AbsenceEtConge>(`${this.url}/absence/${id}`);
  }


  // create demande
  add(absence: AbsenceEtConge){
    return this.http.post(`${this.url}/absence`, absence);
  }

  // update demande
  update(absenceEtConge: AbsenceEtConge){
    return this.http.patch(`${this.url}/${absenceEtConge.idAbsence}`, absenceEtConge);
  }

  // delete demande
  deleteDemande(absenceEtConge: AbsenceEtConge){
    return this.http.delete(`${this.url}/absence/delete/${absenceEtConge.idAbsence}`);
  }

}
