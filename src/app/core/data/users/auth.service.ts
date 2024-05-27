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

  // Inject Router
  router = inject(Router);

  //Inject message service from primeng
  messageService = inject(MessageService);

  //login
  onLogin(email: string, password: string){
    this.getAllUsers().subscribe((users: Utilisateur[]) => {
      const user = users.find((user) => user.email === email && user.password === password);
      if(user != null){
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl("/home");
      }
      else {
        this.messageService.add({severity:'error', summary:'Error', detail:'Email ou Mot de passe incorrect'});
      }
    });
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
