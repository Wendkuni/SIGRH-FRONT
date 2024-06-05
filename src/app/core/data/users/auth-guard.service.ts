import {inject, Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public auth = inject(AuthService);
  public router = inject(Router);

  constructor() { }

  canActivate(): boolean {
    if(this.auth.isAuthenticated()){
      return true;
    }else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
