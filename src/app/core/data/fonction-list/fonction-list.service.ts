import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fonction} from "../avancement/fonction.model";
import {environment} from "../../../../environments/environment";
import {FonctionList, FonctionLists} from "./fonctionList";

@Injectable({
  providedIn: 'root'
})
export class FonctionListService {

  // url
  apiUrl = environment.apiURL;

  // Inject HttpClient
  http = inject(HttpClient);

  // get all fonctions
  getAllFonctions(){
    return this.http.get<FonctionLists>(`${this.apiUrl}/listeFonctions`);
  }

  // get fonction by id
  getFonctionById(id: number){
    return this.http.get<FonctionList>(`${this.apiUrl}/listeFonctions/${id}`);
  }

  // create fonction
  addFonction(fonction: Fonction){
    return this.http.post(`${this.apiUrl}/listeFonction}`, fonction);
  }

  // update fonction
  updateFonction(fonction: Fonction){
    return this.http.put(`${this.apiUrl}/listeFonction/${fonction.idFonction}`, fonction);
  }

  deleteFonction(idFonction: number){
    return this.http.delete(`${this.apiUrl}/listeFonction/${idFonction}`);
  }

}
