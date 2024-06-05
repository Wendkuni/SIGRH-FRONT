import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "./user.model";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Url to json server api
  apiEndpoint = 'http://localhost:3000/users';

  // Inject HttpClient
  http = inject(HttpClient);

  isAuthenticated() {
    let currentUser:Utilisateur = JSON.parse(localStorage.getItem('user') as string);
    if(currentUser){
      return true;
    }
    else {
      return false;
    }
  }

  // get all users
  getAllUsers(){
    return this.http.get<Utilisateur[]>(this.apiEndpoint);
  }

  // create user
  addUser(user: Utilisateur){
    return this.http.post(this.apiEndpoint, user);
  }

  // update user
  updateUser(user: Utilisateur){
    return this.http.patch(`${this.apiEndpoint}/${user.id}`, user);
  }

  // delete user
  deleteUser(user: Utilisateur){
    return this.http.delete(`${this.apiEndpoint}/${user.id}`);
  }
}
