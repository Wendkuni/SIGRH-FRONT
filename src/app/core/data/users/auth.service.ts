import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur, Utilisateurs } from './user.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Url to json server api
  apiEndpoint = 'http://localhost:3000/users';

  // Inject HttpClient
  http = inject(HttpClient);

  isAuthenticated() {
    let currentUser: Utilisateur = JSON.parse(
      localStorage.getItem('user') as string
    );
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }

  // get all users
  getAllUsers() {
    return this.http.get<Utilisateurs>(this.apiEndpoint);
  }

  login(matricule: string, password: string) {
    let userList: Utilisateurs = [];
    this.getAllUsers().subscribe((users) => {
      for (let user of users) {
        if (user.matricule == matricule && password == 'admin123') {
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    });
  }
}
