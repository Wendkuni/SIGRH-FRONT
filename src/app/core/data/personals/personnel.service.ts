import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Personnel, Personnels, TypeEducation} from "./personnel.model";
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
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  };

  // get all personnels
  getAllPersonnels(){
    return this.http.get<Personnels>(`${this.apiUrl}/personnel/All`, this.httpOptions);
  }

  getTypeEducations(){
    return this.http.get<any>(`${this.apiUrl}/personnel/TypeEducations`, this.httpOptions);
  }


  getStatPersonnel(){
    return this.http.get<statPersonnel[]>('http://localhost:3000/statePersonnel');
  }


  // find personnel by id
  findPersonnelById(id: number){
    return this.http.get<Personnel>(`${this.apiUrl}/personnel/ById/${id}`,this.httpOptions);
  };


  // create personnel
  createPersonnel(personnel: Personnel){
    return this.http.post(`${this.apiUrl}/personnel/create`, personnel);
  }

  createPersonnelWithImage(imagePers: File,personnel: Personnel){
    const formData = new FormData();
    formData.append('image',imagePers);
    formData.append('personnel',JSON.stringify(personnel));
    console.log(formData)
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post(`${this.apiUrl}/personnel/create`,formData,{
      reportProgress: true,
      responseType: 'text'
    });
  }

  // update personnel
  updatePersonnel(imagePers: File,personnel: Personnel){
    const deleteImage = false;
    const formData = new FormData();
    formData.append('image',imagePers);
    formData.append('personnel',JSON.stringify(personnel));
    formData.append('deleteImage',JSON.stringify(deleteImage));
    return this.http.put(`${this.apiUrl}/personnel/updade/${personnel.idAgent}`,formData,{
      reportProgress: true,
      responseType: 'text'
    });
  }

  // delete personnel
  deletePersonnel(personnel: Personnel){
    return this.http.delete(`${this.apiUrl}/personnel/delete/${personnel.idAgent}`,this.httpOptions);
  }



}
