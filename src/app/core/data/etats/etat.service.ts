import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personnels} from "../personals/personnel.model";
import {Observable} from "rxjs";
import {AbsenceEtConge, AbsenceEtCongeList} from "../conge/conge_absence.model";

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  urlConge = 'http://localhost:3000/conges';
  http = inject(HttpClient);

  getAllConge(){
    return this.http.get<AbsenceEtCongeList>(`${this.urlConge}`);
  }

}
