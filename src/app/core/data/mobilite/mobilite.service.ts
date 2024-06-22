import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Mobilite} from "./mobilite.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MobiliteService {

  // url du server Json
  url = environment.apiURL

  // Inject HttpClient
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders( { 'Access-Control-Allow-Origin': '*' })
  };

  // get all mobilites
  getAllMobilites(){
    return this.http.get<Mobilite[]>(`${this.url}/affectations`,this.httpOptions);
  }

  // get mobilite by id
  getMobiliteById(id: string){
    return this.http.get<Mobilite>(`${this.url}/${id}`);
  }



  // create mobilite
  addMobilite(mobilite: Mobilite){
    return this.http.post(this.url, mobilite);
  }

  // update mobilite
  updateMobilite(id: string, mobilite: Mobilite){
    return this.http.patch(`${this.url}/${id}`, mobilite);
  }

  // delete mobilite
  deleteMobilite(mobilite: Mobilite){
    return this.http.delete(`${this.url}/${mobilite.id}`);
  }

}
