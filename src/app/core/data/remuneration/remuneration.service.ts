import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Remuneration, Remunerations} from "./renumeration.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RemunerationService {

   // url
  url = environment.apiURL;

//Inject HttpClient
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

//Get all remunerations
  getAllRemunerations() {
    return this.http.get<Remunerations>(`${this.url}/remunerations`, this.httpOptions);
  }

  findRemunerationById(id: number){
    return this.http.get<Remuneration>(`${this.url}/remunerations/${id}`);
  }

  // Add remuneration
  addRemuneration(remuneration: Remuneration) {
    return this.http.post(`${this.url}/remuneration`, remuneration);
  }

  // Update remuneration
  updateRemuneration( remuneration: Remuneration) {
    let options = {
      params: new HttpParams().set('id', remuneration.IdRemunerationAgent)
    }
    return this.http.put(`${this.url}/remuneration/${remuneration.IdRemunerationAgent}`, remuneration, options);
  }

  // Delete remuneration
  deleteRemuneration(id: number) {
    return this.http.delete(`${this.url}/remuneration/delete/${id}`);
  }
}
