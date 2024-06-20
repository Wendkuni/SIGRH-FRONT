import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

//Get all remunerations
  getAllRemunerations() {
    return this.http.get<Remunerations>(`${this.url}/remunerations`);
  }

  // Add remuneration
  addRemuneration(remuneration: Remuneration) {
    return this.http.post<Remuneration>(`${this.url}/remuneration`, remuneration);
  }

  // Update remuneration
  updateRemuneration( remuneration: Remuneration) {
    return this.http.patch<Remuneration>(`${this.url}/remuneration/${remuneration.IdRemunerationAgent}`, remuneration);
  }

  // Delete remuneration
  deleteRemuneration(id: number) {
    return this.http.delete<Remuneration>(`${this.url}/remuneration/delete/${id}`);
  }
}
