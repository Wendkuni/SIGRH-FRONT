import {Component, OnInit} from '@angular/core';
import {AppMenuitemComponent} from './app.menuitem.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'mrt-menu',
  standalone: true,
  imports: [AppMenuitemComponent, NgForOf, NgIf],
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];
  role = '';

  currentUser: any = JSON.parse(localStorage.getItem('user') as string);

  ngOnInit() {
    for (let i = 0; i < this.currentUser.roles.length; i++) {
      this.role = this.currentUser.roles[i];
    }
    // Espace Agent
    if (this.role === 'ROLE_USER') {
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
              label: 'Mobilité',
              icon: 'pi pi-sort-alt',
              items: [
                {
                  label: 'Convenances personnelles',
                  routerLink: ['/agent-convenance-personnelle'],
                },
                {
                  label: 'Permutation de poste',
                  routerLink: ['/agent-permutation-poste'],
                },
                {
                  label: 'Mes demandes',
                  routerLink: ['/agent-mes-demandes'],
                }
              ],
            },
            // Affaire sociale
            {
              label: 'Affaire sociale',
              icon: 'pi pi-wallet',
              items: [
                {
                  label: 'Allocations Familiales',
                  routerLink: ['/agent-allocation'],
                },
                {
                  label: 'Assurances Maladie CNAM',
                },
              ],
            },
            {
              label: 'Cariere',
              icon: ' pi pi-id-card',
              items: [

                {
                  label: 'Pieces a téléchargées',
                  routerLink: ['/mes-dossiers']
                },

                {
                  label: 'Demande Integration',
                  routerLink: ['/agent-integration'],
                },

                {
                  label: 'Demande Titularisation',
                  routerLink: ['/agent-demande-titularisation'],
                },

                {
                  label: 'Demande Avancement',
                  routerLink: ['/avancement-choix'],
                },
                {
                  label: 'Demande Bonification',
                  routerLink: ['/agent-bonification'],
                },
                {
                  label: 'Demande Reclassement',
                  routerLink: ['/agent-reclassement'],
                },
                {
                  label: 'Fiche Evaluation',
                  routerLink: ['/agent-evaluation-fiche'],
                },
                {
                  label: 'Demande Position de detachement',
                  routerLink: ['/agent-position-detachemnt']
                },

                {
                  label: 'Demande position de disponibilité',
                  routerLink: ['/agent-position-disponibilite']
                },


                {
                  label: 'Demande Retraite Anticiper',
                  routerLink: ['/agent-retraite-anticiper']
                },

                {
                  label: 'Demande de demission',
                  routerLink: ['/agent-demission']
                }
              ]
            },
          ],
        },
      ];
    }

    // Espace DREN
    if (this.role === 'ROLE_DREN') {
      this.model = [
        {
          label: 'Page Accueil',
          items: [
            {
              label: 'Acceuil',
              icon: 'pi pi-home',
              routerLink: ['/home'],
            },
          ],
        },
        {
          label: 'Pages de Gestion',
          items: [
            {
              label: 'Gestion de la mobilité',
              icon: 'pi pi-sort-alt',
              items: [
                {
                  label: 'Convenances personnelles',
                  routerLink: ['/dren-affectation-convenance-personnelle'],
                },
                {
                  label: 'Néccesité de service ',
                  routerLink: ['/dren-necessite-service'],
                },
                {
                  label: 'Permutation',
                  routerLink: ['/dren-affectation-permutation'],
                },
              ],
            },
            // Affaire sociale
            {
              label: 'Gestion des affaires sociales',
              icon: 'pi pi-wallet',
              items: [
                {
                  label: 'Allocations Familiales',
                  routerLink: ['/dren-allocation-familiale'],
                },
                {
                  label: 'Assurances Maladie CNAM',
                },
              ],
            },
            // Recrutement
            {
              label: 'Gestion de Récrutement',
              icon: 'pi pi-fw pi-user',
              routerLink: ['/dren-besoin-personnel'],
            },
          ],
        },
      ];
    }

    // Espace commission
    if (this.role === 'ROLE_COMMISSION') {
      this.model = [
        {
          label: 'Page Accueil',
          items: [
            {
              label: 'Acceuil',
              icon: 'pi pi-home',
              routerLink: ['/home'],
            },
          ],
        },
        {
          label: 'Pages de Gestion',
          items: [
            {
              label: 'Gestion de Mobilité',
              icon: 'pi pi-sort-alt',
              items: [
                {
                  label: 'Convenances personnelles',
                  routerLink: [
                    '/commission-affectation-convenance-personnelle',
                  ],
                },
                {
                  label: 'Néccesité de service ',
                  routerLink: ['/commission-necessite-service'],
                },
                {
                  label: 'Permutation',
                  routerLink: ['/commission-affectation-permutation'],
                },
                {
                  label: 'Nomination',
                  routerLink: ['/commission-nomination'],
                },
                {
                  label: 'Recapiulatif',
                  items: [
                    {
                      label: 'Convenance Personnelle',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-convenance-personnelle'],
                    },
                    {
                      label: 'Nomination',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-nomination'],
                    },
                    {
                      label: 'Permutation',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-permutation'],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
    }

    // Espace DRH
    if (this.role === 'ROLE_GRH') {
      this.model = [
        {
          label: 'Page Accueil',
          items: [
            {
              label: 'Acceuil',
              icon: 'pi pi-home',
              routerLink: ['/home'],
            },
          ],
        },
        {
          label: 'Pages de Gestion',
          items: [
            {
              label: 'Gestion de Mobilité',
              icon: 'pi pi-sort-alt',
              items: [
                {
                  label: 'Néccesité de service Sortant',
                  routerLink: ['/necessite-service-sortant'],
                },
                {
                  label: 'Nomination',
                  routerLink: ['/agent-nomination'],
                },
                {
                  label: 'Recapiulatif',
                  items: [
                    {
                      label: 'Convenance Personnelle',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-convenance-personnelle'],
                    },
                    {
                      label: 'Nomination',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-nomination'],
                    },
                    {
                      label: 'Permutation',
                      icon: 'pi pi-list-check ',
                      routerLink: ['/recapitulatif-permutation'],
                    },
                  ],
                },
              ],
            },
            // Affaire sociale
            {
              label: 'Gestion des affaires sociales',
              icon: 'pi pi-wallet',
              items: [
                {
                  label: 'Allocations Familiales',
                  routerLink: ['/drh-allocation-familiale'],
                },
                {
                  label: 'Assurances Maladie CNAM',
                },
              ],
            },
            //   Recrutement
            {
              label: 'Gestion de Récrutement',
              icon: 'pi pi-fw pi-user',
              items: [
                {
                  label: 'Integration Direct',
                  routerLink: ['/drh-integration-direct'],
                },
                {
                  label: 'Stage de Recrutement',
                  routerLink: ['/drh-stage-recrutement'],
                },
              ],
            }
          ],
        },
      ];
    }

    // Espace ADMIN
    if (this.role === 'ROLE_ADMIN') {
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
              label: 'Gestion de Mobilité',
              icon: 'pi pi-fw pi-user',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Appréciations',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Carriere
            {
              label: 'MODULE 2: Gestion de Carrière',
              icon: 'pi pi-fw pi-user',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Recrutement
            {
              label: 'MODULE 3: Gestion de Récrutement',
              icon: 'pi pi-fw pi-user',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Formation
            {
              label: 'MODULE 4: Gestion de Formations',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Courriels
            {
              label: 'MODULE 5: Gestion de Courriels',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Rémuneration
            {
              label: 'MODULE 6: Gestion de Rémuneration',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },
            // Congés et Absences
            {
              label: 'MODULE 7: Gestion de Congés et Absences',
              icon: 'pi pi-fw pi-calendar',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
            },

            // Affaires Sociales et Assurances
            {
              label: 'MODULE 8: Gestion de Affaires Sociales et Assurances',
              icon: 'pi pi-fw pi-shield',
              items: [
                {
                  label: 'Enregistrements',
                },
                {
                  label: 'Etats',
                },
              ],
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
                  label: 'Etats',
                },
              ],
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
              icon: 'pi pi-fw pi-users',
            },
            {
              label: 'Liste Fonctions',
              icon: 'pi pi-fw pi-user',
              routerLink: ['fonction-list'],
            },
          ],
        },
      ];
    }
  }
}
