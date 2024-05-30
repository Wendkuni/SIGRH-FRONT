import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dossier} from "../personals/personnel.model";

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  // Json Api url
  url = 'http://localhost:3000/dossiers'

  //inject
  http = inject(HttpClient);

  getAllDossiers(){
    return this.http.get<Dossier[]>(this.url);
  }
}
