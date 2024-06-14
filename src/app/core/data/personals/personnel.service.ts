import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personnel} from "./personnel.model";

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

  // url du server Json
  url = 'http://localhost:3000/personnels';

  // Inject HttpClient
  http = inject(HttpClient);

  // get all personnels
  getAllPersonnels(){
    return this.http.get<Personnel[]>(this.url);
  }

  getStatPersonnel(){
    return this.http.get<statPersonnel[]>('http://localhost:3000/statePersonnel');
  }

  getPersonnelDisponible(){
    return this.http.get<statePersonnelDisponible[]>('http://localhost:3000/statePersonnelDisponible');
  }

  // get personnel by id
  getPersonnelById(id: string){
    return this.http.get<Personnel>(`${this.url}/${id}`);
  }

  // create personnel
  addPersonnel(personnel: Personnel){
    return this.http.post(this.url, personnel);
  }

  // update personnel
  updatePersonnel(personnel: Personnel){
    return this.http.put(`${this.url}/${personnel.idAgent}`, personnel);
  }

  // delete personnel
  deletePersonnel(personnel: Personnel){
    return this.http.delete(`${this.url}/${personnel.idAgent}`);
  }

}
