import { Component } from '@angular/core';
import {Utilisateur} from "../../core/data/users/user.model";
import {CardModule} from "primeng/card";
import {AffectationComponent} from "../affectation/affectation.component";
import {DossierComponent} from "../dossier/dossier.component";
import {FonctionComponent} from "../fonction/fonction.component";
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'mrt-user-profile',
  standalone: true,
  imports: [
    CardModule,
    AffectationComponent,
    DossierComponent,
    FonctionComponent,
    TabViewModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  userActive:Utilisateur= JSON.parse(localStorage.getItem('user') as string);

}
