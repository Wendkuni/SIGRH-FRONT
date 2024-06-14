import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Courier, Couriers} from "./couriel.model";

@Injectable({
  providedIn: 'root'
})
export class CourielService {
  // url du server Json
  private url = 'http://localhost:3000/couriels';

  // Inject HttpClient
  private http = inject(HttpClient);

  // get all couriels
  getAllCouriels(){
    return this.http.get<Couriers>(this.url);
  }

  //add couriel
  addCouriel(couriel: Courier){
    return this.http.post(this.url, couriel);
  }

  //update couriel
  updateCouriel(id: string, couriel: Courier){
    return this.http.patch(`${this.url}/${id}`, couriel);
  }

  //delete couriel
  deleteCouriel(couriel: Courier){
    return this.http.delete(`${this.url}/${couriel.id}`);
  }
}
