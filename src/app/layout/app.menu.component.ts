import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {AppMenuitemComponent} from "./app.menuitem.component";
import {NgForOf, NgIf} from "@angular/common";
import {Personnel} from "../core/data/personals/personnel.model";
import { RouterLink } from '@angular/router';

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

    currentUser: Personnel = JSON.parse(localStorage.getItem('user') as string);

    ngOnInit() {
      if(this.currentUser.espace === 'ESPACE AGENT'){
        this.model = [
          {
            label: 'Page Accueil',
            items: [
              {
                label: 'Acceuil',
                icon: 'pi pi-home',
                routerLink: ['/home-agent-space'],
              },
            ],
          },
          {
            label: 'Pages de Gestion',
            items: [
              // Mobilite
              {
                label: 'Affection',
                icon: 'pi pi-sort-alt',
                items: [
                  {
                    label: 'Convenances personnelles',
                    routerLink: ['/agent-convenance-personnelle']
                  },
                  {
                    label: 'Permutation de poste',
                    routerLink: ['/agent-permutation-poste']
                  }
                ]
              }
            ],
          }
        ];
      }
      if(this.currentUser.espace === 'ESPACE DREN'){}
      if(this.currentUser.espace === 'ESPACE GHR'){}
      if(this.currentUser.espace === 'ESPACE ADMINISTRATEUR'){
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
              // Mobilite
              {
                label: 'MODULE 1: Gestion de Mobilité',
                icon: 'pi pi-fw pi-user',
                roles: ['Utilisateur','Administrateur','Dren','Grh'],
                items: [
                  {
                    label: 'Enregistrements',
                    routerLink: ['/mobilite']
                  },
                  {
                    label: 'Appréciations',
                    roles: ['Utilisateur','Administrateur','Dren','Grh']
                  },
                  {
                    label: 'Etats',
                    roles: ['Administrateur','Grh']
                  }
                ]
              },

              // Carriere
              {
                label: 'MODULE 2: Gestion de Carrière',
                icon: 'pi pi-fw pi-user',
                items: [
                  {
                    label: 'Enregistrements'
                  },
                  {
                    label: 'Etats'
                  }
                ]
              },

              // Recrutement
              {
                label: 'MODULE 3: Gestion de Récrutement',
                icon: 'pi pi-fw pi-user',
                items: [
                  {
                    label: 'Enregistrements'
                  },
                  {
                    label: 'Etats'
                  }
                ]
              },

              // Formation
              {
                label: 'MODULE 4: Gestion de Formations',
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

              // Courriels
              {
                label: 'MODULE 5: Gestion de Courriels',
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

              // Rémuneration
              {
                label: 'MODULE 6: Gestion de Rémuneration',
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
              // Congés et Absences
              {
                label: 'MODULE 7: Gestion de Congés et Absences',
                icon: 'pi pi-fw pi-calendar',
                items: [
                  {
                    label: 'Enregistrements'
                  },
                  {
                    label: 'Etats',
                  }
                ]
              },

              // Affaires Sociales et Assurances
              {
                label: 'MODULE 8: Gestion de Affaires Sociales et Assurances',
                icon: 'pi pi-fw pi-shield',
                items: [
                  {
                    label: 'Enregistrements'
                  },
                  {
                    label: 'Etats'
                  }
                ]
              },

              // Sanctions-Récompenses
              {
                label: 'MODULE 9: Gestion de Sanctions-Récompenses',
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

              // {
              //     label: 'Récrutement-Mobilité-Carrière',
              //     icon: 'pi pi-fw pi-user',
              //     items: [
              //       {
              //         label: 'Enregistrements',
              //         routerLink: ['/personnel']
              //       },
              //       {
              //         label: 'Traitement en attente',
              //       },
              //       {
              //         label: 'Etats',
              //         routerLink: ['/etats-personnel']
              //       }
              //     ]
              // },
              // {
              //     label: 'Congés et Absences',
              //     icon: 'pi pi-fw pi-calendar',
              //   items: [
              //     {
              //       label: 'Enregistrements',
              //       routerLink: ['/conge-absence']
              //     },
              //     {
              //       label: 'Traitement en attente',
              //     },
              //     {
              //       label: 'Etats',
              //       routerLink: ['/etats-absence']
              //     }
              //   ]
              // },
              // {
              //     label: 'Sanctions-Récompenses',
              //     icon: 'pi pi-fw pi-wallet',
              //   items: [
              //     {
              //       label: 'Enregistrements',
              //     },
              //     {
              //       label: 'Traitement en attente',
              //     },
              //     {
              //       label: 'Etats'
              //     }
              //   ]
              // },
              // {
              //     label: 'Formations',
              //     icon: 'pi pi-fw pi-briefcase',
              //   items: [
              //     {
              //       label: 'Enregistrements'
              //     },
              //     {
              //       label: 'Etats'
              //     }
              //   ]
              // },
              // {
              //     label: 'Rémuneration',
              //     icon: 'pi pi-fw pi-dollar',
              //   items: [
              //     {
              //       label: 'Enregistrements',
              //       routerLink: ['/remuneration']
              //     },
              //     {
              //       label: 'Etats',
              //       routerLink: ['/etats-remuneration']
              //     }
              //   ]
              // },
              // {
              //     label: 'Affaires Sociales et Assurances',
              //     icon: 'pi pi-fw pi-shield',
              //   items: [
              //     {
              //       label: 'Enregistrements',
              //       routerLink: ['/social-assurance']
              //     },
              //     {
              //       label: 'Etats'
              //     }
              //   ]
              // },
              // {
              //     label: 'Courriels',
              //     icon: 'pi pi-fw pi-at',
              //   items: [
              //     {
              //       label: 'Enregistrements'
              //     },
              //     {
              //       label: 'Etats'
              //     }
              //   ]
              // },
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
                label: 'Liste Fonctions',
                icon: 'pi pi-fw pi-user',
                routerLink: ['fonction-list']
              }
            ]
          }
        ];
      }
    }
}
