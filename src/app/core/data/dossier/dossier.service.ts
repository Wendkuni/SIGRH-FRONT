import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Dossier, Dossiers} from "./dossier.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DossierService {

  // url
  apiUrl = environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);


  // get all dossiers
  getAllDossiers(){
    return this.http.get<Dossiers>(`${this.apiUrl}/dossiers`);
  }

  //add dossier
  addDossier(dossier: Dossier){
    return this.http.post(`${this.apiUrl}/dossier`, dossier);
  }

  findPersonnelById(id: number){
    return this.http.get(`${this.apiUrl}/dossiersBy/${id}`)
  }

  //update dossier
  updateDossier(dossier: Dossier){
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded"),
      params: new HttpParams().set('id', dossier.idDossierScan)
    }
    return this.http.patch(`${this.apiUrl}/dossier/${dossier.idDossierScan}`, dossier, options);
  }

  //delete dossier
  deleteDossier(dossier: Dossier){
    return this.http.delete(`${this.apiUrl}/dossier/delete/${dossier.idDossierScan}`);
  }
}
