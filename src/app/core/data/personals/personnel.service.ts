import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Personnel, Personnels} from "./personnel.model";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

interface statPersonnel{
  matricule:string;
  nomPrenom:string;
  region:string;
  direction:string;
  affectation:string;
}

interface statePersonnelDisponible{
  matricule:string,
  nomPrenom:string,
  disponible:boolean,
  actiforno:boolean,
  absent:boolean,
  conge:boolean
}

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  // url
  apiUrl = environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' })
  };

  // get all personnels
  getAllPersonnels(){
    return this.http.get<Personnels>(this.apiUrl + '/personnel/All', this.httpOptions);
  }

  // find personnel by locality
  findPersonnelByLocalite(id: number){
    return this.http.get<Personnels>(`${this.apiUrl}/personnel/ByLocalite/${id}`);
  }

  findPersonnelByAffectation(id: number){
    return this.http.get<Personnels>(`${this.apiUrl}/personnel/ByAffectation/${id}`);
  }

  getStatPersonnel(){
    return this.http.get<statPersonnel[]>('http://localhost:3000/statePersonnel');
  }

  getPersonnelDisponible(){
    return this.http.get<statePersonnelDisponible[]>('http://localhost:3000/statePersonnelDisponible');
  }

  // find personnel by id
  findPersonnelById(id: number){
    return this.http.get<Personnel>(`${this.apiUrl}/ById/${id}`,this.httpOptions);
  }

  // create personnel
  createPersonnel(personnel: Personnel){
    return this.http.post(`${this.apiUrl}/personnel/create`, personnel, this.httpOptions);
  }

  // update personnel
  updatePersonnel(personnel: Personnel){

   let options = {
     headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' }),
      params: new HttpParams().set('id', personnel.idAgent)
    }

    return this.http.put(`${this.apiUrl}/personnel/updade/${personnel.idAgent}`,personnel, options );
  }

  // delete personnel
  deletePersonnel(personnel: Personnel){
    return this.http.delete(`${this.apiUrl}/personnel/delete/${personnel.idAgent}`,this.httpOptions);
  }

}
