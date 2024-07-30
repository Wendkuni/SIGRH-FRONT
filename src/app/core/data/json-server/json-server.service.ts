import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  apiUrl = 'http://localhost:3000/eleves';
  http = inject(HttpClient);

  constructor() {
  }

  getAllPersonnels() {
    return this.http.get(this.apiUrl);
  }
}
