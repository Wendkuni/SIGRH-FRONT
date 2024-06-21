import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Personnels} from "../personals/personnel.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  url = 'http://localhost:3000/personnels';
  http = inject(HttpClient);

  getPersonnelActif(){
    let personnelList!: Personnels
    let listPersonnelActif:Personnels = [];
    this.http.get<Personnels>(this.url).subscribe( (response) =>{
      personnelList = response;
      personnelList.forEach(perso => {
        if(perso.actifOrNot === 'Actif'){
          listPersonnelActif.push(perso);
        }
      })
    });
    return listPersonnelActif;
  }

  getPersonnelNoActif(){
    let personnelList!: Observable<Personnels>
    let listPersonnelActif:Personnels = [];
    personnelList = this.http.get<Personnels>(this.url);
    console.log(personnelList);
    return listPersonnelActif;
  }
}
