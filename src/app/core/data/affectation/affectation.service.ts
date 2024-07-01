import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Affectation, Mobilite, Mobilites} from "./mobilite.model";
import {environment} from "../../../../environments/environment";
import { PieceJustificatif } from '../personals/personnel.model';

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

  getLocalite() {
    return this.http.get<any>(`${this.apiUrl}/localites`);
  }

  getAllDren(){
    return this.http.get<any>(`${this.apiUrl}/AllDdren`, this.httpOptions)
  }

  getAllAffectationNature(){
    return this.http.get<any>(`${this.apiUrl}/TypeNature`, this.httpOptions)
  }

  createAffectationByConvenance(data: Affectation, listPieceJustificatif: PieceJustificatif[]) {
    const formData = new FormData();
    formData.append('affectation', JSON.stringify(data));
    listPieceJustificatif.forEach((piece) => {
      formData.append('files', piece.images, piece.libelle);
    });
    
    return this.http.post(`${this.apiUrl}/affectation`, formData,{
      reportProgress: true,
      responseType: 'text'
    });
  }
}
