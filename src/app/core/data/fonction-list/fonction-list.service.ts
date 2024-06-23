import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fonction} from "../avancement/fonction.model";

@Injectable({
  providedIn: 'root'
})
export class FonctionListService {

  url = 'http://localhost:3000/fonctions';
  // Inject HttpClient
  http = inject(HttpClient);

  // get all fonctions
  getAllFonctions(){
    return this.http.get<Fonction[]>(this.url);
  }

  // get fonction by id
  getFonctionById(id: number){
    return this.http.get<Fonction>(`${this.url}/${id}`);
  }

  // create fonction
  addFonction(fonction: Fonction){
    return this.http.post(this.url, fonction);
  }

  // update fonction
  updateFonction(fonction: Fonction){
    return this.http.patch(`${this.url}/${fonction.idFonction}`, fonction);
  }

}
