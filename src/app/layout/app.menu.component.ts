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
                        items: [
                          {
                            label: 'Enregistrements',
                            routerLink: ['/personnel']
                          },
                          {
                            label: 'Etats',
                            routerLink: ['/etats-personnel']
                          }
                        ]
                    },
                    {
                        label: 'Congés et Absences',
                        icon: 'pi pi-fw pi-calendar',
                      items: [
                        {
                          label: 'Enregistrements',
                          routerLink: ['/conge-absence']
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                    {
                        label: 'Sanctions-Recompenses',
                        icon: 'pi pi-fw pi-wallet',
                      items: [
                        {
                          label: 'Enregistrements',
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                    {
                        label: 'Formations',
                        icon: 'pi pi-fw pi-briefcase',
                      items: [
                        {
                          label: 'Enregistrements'
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                    {
                        label: 'Remuneration',
                        icon: 'pi pi-fw pi-dollar',
                      items: [
                        {
                          label: 'Enregistrements',
                          routerLink: ['/remuneration']
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                    {
                        label: 'Affaires Sociales-Assurances',
                        icon: 'pi pi-fw pi-shield',
                      items: [
                        {
                          label: 'Enregistrements',
                          routerLink: ['/social-assurance']
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                    {
                        label: 'Courriels',
                        icon: 'pi pi-fw pi-at',
                      items: [
                        {
                          label: 'Enregistrements',
                        },
                        {
                          label: 'Etats'
                        }
                      ]
                    },
                ],
            },
        {
          label: 'Administration',
          items: [
            {
              label: 'Gestion des Utilisateurs',
              icon: 'pi pi-fw pi-users'
            },
            {
              label: 'Fonction-list',
              icon: 'pi pi-fw pi-user',
              routerLink: ['fonction-list']
            }
          ]
        }
        ];
    }
}
