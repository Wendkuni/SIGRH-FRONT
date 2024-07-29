import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Mobilite, Mobilites} from './mobilite.model';
import {environment} from '../../../../environments/environment';
import {
  AffectationBack,
  DemandeConvenancePersonnelle,
  DemandeConvenancePersonnelleList,
  Permutation,
  PermutationList,
  PieceJustificatif,
} from '../mobilite/mobilite.model';

@Injectable({
  providedIn: 'root',
})
export class AffectationService {
  // url
  apiUrl = environment.apiURL;
  // JsonServer api
  apiUrlJsonServer = environment.jsonServerURL;

  // Inject HttpClient
  http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
  };

  // get all mobilites
  getAllMobilites() {
    return this.http.get<Mobilites>(`${this.apiUrl}/affectations`);
  }

  findMobiliteByAgent(id: number) {
    return this.http.get<Mobilite[]>(
      `${this.apiUrl}/affectationsByAgent/${id}`,
      this.httpOptions
    );
  }

  // get mobilite by id
  findMobiliteById(id: number) {
    return this.http.get<Mobilite>(`${this.apiUrl}/affectation/${id}`);
  }

  // create mobilite
  addMobilite(mobilite: Mobilite) {
    return this.http.post(`${this.apiUrl}/affectation`, mobilite);
  }

  // update mobilite
  updateMobilite(mobilite: Mobilite) {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
      params: new HttpParams().set('id', mobilite.idAffectation),
    };
    return this.http.patch(
      `${this.apiUrl}/affectation/${mobilite.idAffectation}`,
      mobilite
    );
  }

  // delete mobilite
  deleteMobilite(mobilite: Mobilite) {
    return this.http.delete(
      `${this.apiUrl}/affectation/delete/${mobilite.idAffectation}`
    );
  }

  getLocalite() {
    return this.http.get<any>(`${this.apiUrl}/localites`);
  }

  getAllDren() {
    return this.http.get<any>(`${this.apiUrl}/AllDdren`, this.httpOptions);
  }

  getAllAffectationNature() {
    return this.http.get<any>(`${this.apiUrl}/TypeNature`, this.httpOptions);
  }

  createAffectationByConvenance(
    data: AffectationBack,
    listPieceJustificatif: PieceJustificatif[]
  ) {
    const formData = new FormData();
    formData.append('image', JSON.stringify(listPieceJustificatif));
    formData.append('affectation', JSON.stringify(data));

    console.log(formData);

    return this.http.post(
      'http://localhost:8082/v1/api/affectation/create',
      formData,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );
  }

  addDemandeConvenancePersonnelle(
    asignmentRequest: DemandeConvenancePersonnelle
  ) {
    return this.http.post(
      `${this.apiUrlJsonServer}/demandeConvenancePersonnelle`,
      asignmentRequest
    );
  }

  getAllDemandeConvenancePersonnelle() {
    return this.http.get<DemandeConvenancePersonnelleList>(
      `${this.apiUrlJsonServer}/demandeConvenancePersonnelle`
    );
  }

  updateDemandeConvenancePersonnelle(
    asignmentRequest: DemandeConvenancePersonnelle
  ) {
    return this.http.put(
      `${this.apiUrlJsonServer}/demandeConvenancePersonnelle/${asignmentRequest.id}`,
      asignmentRequest
    );
  }


  createPermuttionJson(data: Permutation) {
    return this.http.post(
      `${this.apiUrlJsonServer}/demandePermutations`,
      data
    );
  }

  updatePermuttionJson(data: Permutation) {
    return this.http.put(`${this.apiUrlJsonServer}/demandePermutations/${data.id}`, data)
  }

  getAllPermutationJson() {
    return this.http.get<PermutationList>(`${this.apiUrlJsonServer}/demandePermutations`);
  }
}
