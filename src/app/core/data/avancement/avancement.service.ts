import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Fonction, Fonctions} from "./fonction.model";

@Injectable({
  providedIn: 'root'
})
export class AvancementService {

 // Backend api url
  url =  environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' })
  };

  // get all avancement
  getAllAvancements(){
    return this.http.get<Fonctions>(`${this.url}/fonctionAgent/All`, this.httpOptions);
  }

  // create avancement
  createAvancement(fonction: Fonction){
    return this.http.post(`${this.url}/fonctionAgent/create`, fonction, this.httpOptions);
  }

  // update avancement
  updateAvancement(fonction: Fonction){
    let options = {
      headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' }),
      params: new HttpParams().set('id', fonction.idFonction)
    }
    return this.http.put(`${this.url}/fonctionAgent/Update/${fonction.idFonction}`, fonction, options);
  }


  // get all avancement by personnel
  findAvancementByAgent(id: number){
    return this.http.get<Fonctions>(`${this.url}/fonctionAgent/ByAgent/${id}`,this.httpOptions);
  }

  findAvancementById(id: number){
    return this.http.get<Fonction>(`${this.url}/fonctionAgent/ById/${id}`, this.httpOptions);
  }

//   delete avancement
  delateAvancement(id: number){
    return this.http.delete(`${this.url}/fonctionAgent/delete/${id}`, this.httpOptions);
  }
}
