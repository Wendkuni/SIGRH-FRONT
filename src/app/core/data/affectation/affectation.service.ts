import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Mobilite, Mobilites} from "./mobilite.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  // url
  apiUrl = environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);


  httpOptions = {
    headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' })
  };

  // get all mobilites
  getAllMobilites(){
    return this.http.get<Mobilites>(`${this.apiUrl}/affectations`);
  }

  findMobiliteByAgent(id: number){
    return this.http.get<Mobilite[]>(`${this.apiUrl}/affectationsByAgent/${id}`, this.httpOptions);
  }

  // get mobilite by id
  findMobiliteById(id: number){
    return this.http.get<Mobilite>(`${this.apiUrl}/affectation/${id}`);
  }

  // create mobilite
  addMobilite(mobilite: Mobilite){
    return this.http.post(`${this.apiUrl}/affectation`, mobilite);
  }

  // update mobilite
  updateMobilite(mobilite: Mobilite){
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded"),
      params: new HttpParams().set('id', mobilite.idAffectation)
    }
    return this.http.patch(`${this.apiUrl}/affectation/${mobilite.idAffectation}`, mobilite);
  }

  // delete mobilite
  deleteMobilite(mobilite: Mobilite){
    return this.http.delete(`${this.apiUrl}/affectation/delete/${mobilite.idAffectation}`);
  }
}
