import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Avancement} from "./fonction.model";

@Injectable({
  providedIn: 'root'
})
export class AvancementService {

  // url du server Json
  url = 'http://localhost:3000/avancements';

  // Inject HttpClient
  http = inject(HttpClient);
  // get all avancement
  getAllAvancements(){
    return this.http.get<Avancement[]>(`${this.url}`);
  }

  // create avancement
  addAvancement(avancement:Avancement){
    return this.http.post(this.url, avancement);
  }

  // update avancement
  updateAvancement(id:string, avancement:Avancement){
    return this.http.put(`${this.url}/${id}`, avancement);
  }


  // get all avancement by personnel
  getAvancementsByPersonnel(idPersonnel:string){
    let avancementByPersonnel!: Avancement[];
    let avancements!: Avancement[];
    let listAvancement = this.http.get<Avancement[]>(`${this.url}`);
    listAvancement.subscribe((response) => {
      avancements= response
    })
    let item;
    // @ts-ignore
    for (const item of avancements) {
      if(item.idPersonnel == idPersonnel){
        avancementByPersonnel.push(item);
      }
    }
    console.log(avancementByPersonnel)
    return avancementByPersonnel
  }

//   delete avancement
  delateAvancement(avancement: Avancement){
    return this.http.delete(`${this.url}/${avancement.id}`);
  }
}
