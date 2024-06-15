import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Personnel, Personnels} from "./personnel.model";
import {environment} from "../../../../environments/environment";

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



  // get all personnels
  getAllPersonnels(){
    return this.http.get<Personnels>(this.apiUrl + '/personnels');
  }

  getStatPersonnel(){
    return this.http.get<statPersonnel[]>('http://localhost:3000/statePersonnel');
  }

  getPersonnelDisponible(){
    return this.http.get<statePersonnelDisponible[]>('http://localhost:3000/statePersonnelDisponible');
  }

  // find personnel by id
  findPersonnelById(id: number){
    return this.http.get<Personnel>(`${this.apiUrl}/personnelsBy/${id}`);
  }

  // create personnel
  createPersonnel(personnel: Personnel){
    return this.http.post(`${this.apiUrl}/personnel`, personnel);
  }

  // update personnel
  updatePersonnel(personnel: Personnel){

   let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded"),
      params: new HttpParams().set('id', personnel.idAgent)
    }


    return this.http.put(`${this.apiUrl}/personnel/${personnel.idAgent}`,personnel, options );
  }

  // delete personnel
  deletePersonnel(personnel: Personnel){
    return this.http.delete(`${this.apiUrl}/personnel/delete/${personnel.idAgent}`);
  }

  getPersonnelByAffectation(id:number){
    return this.http.get<Personnels>(`${this.apiUrl}/personnelsByAffectation/${id}`);
  }

  getPersonnelByLocalite(id:number){
    return this.http.get<Personnels>(`${this.apiUrl}/personnelsByLocalite/${id}`);
  }

}
