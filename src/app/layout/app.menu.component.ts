import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {AppMenuitemComponent} from "./app.menuitem.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'mrt-menu',
  standalone: true,
  imports: [
    AppMenuitemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
      this.model = [
            {
                label: 'Accueil',
                items: [
                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-home',
                        routerLink: ['/home'],
                    },
                ],
            },
            {
                label: 'Pages de Gestion',
                items: [
                    {
                        label: 'Recrutement-Mobilité-Carrière',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/personnel'],
                    },
                    {
                        label: 'Congés et Absences',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/conge-absence'],
                    },
                    {
                        label: 'Sanctions-Recompenses',
                        icon: 'pi pi-fw pi-wallet'
                    },
                    {
                        label: 'Formations',
                        icon: 'pi pi-fw pi-briefcase'
                    },
                    {
                        label: 'Remuneration',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/remunerations'],
                    },
                    {
                        label: 'Affaires Sociales-Assurances',
                        icon: 'pi pi-fw pi-shield',
                        routerLink: ['social-assurance'],
                    },
                    {
                        label: 'Courriels',
                        icon: 'pi pi-fw pi-at',
                        routerLink: ['couriers'],
                    },
                  {
                    label: 'Gestion des Utilisateurs',
                    icon: 'pi pi-fw pi-users',
                    routerLink: ['users']
                  },
                    {
                        label: 'Fonction-list',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['fonction-list'],
                    }
                ],
            },
        ];
    }
}
