import { Component } from '@angular/core';
import { Personnel } from '../../../../core/data/personals/personnel.model';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'mrt-agent-form-details-view',
  standalone: true,
  imports: [
    CalendarModule
  ],
  template: `
  <div class="grid">
    <div class="col-12 lg:col-4">
      <!-- <span class="text-900 block mb-3 font-bold">Informations: </span> -->
      <ul class="list-none p-0 m-0 text-600 mb-2 text-600">
          <li class="mb-3">
            <span class="font-semibold">
              Année scolaire :
            </span>
             2024-2025
          </li>
          <li class="mb-3">
            <span class="font-semibold">
              Nom et Prénoms :
            </span>
            {{selectedPersonnel.nomPrenom}}-{{selectedPersonnel.nomPrenomArab}}
          </li>
          <li class="mb-3">
            <span class="font-semibold">
              NNI :
            </span>
             {{selectedPersonnel.nni}}
          </li>
          <li class="mb-3">
            <span class="font-semibold">
              Matricule :
            </span>
            {{selectedPersonnel.matricule}}
          </li>
          <li class="mb-3">
            <span class="font-semibold">
              Date de naissance : {{selectedPersonnel.dateNaiss}}
            </span>
          </li>
      </ul>
    </div>
  <div class="col-12 lg:col-4">
    <ul class="list-none p-0 m-0 text-600 mb-2 text-600">
      <li class="mb-3"><span class="font-semibold">Echelon :</span> </li>
      <li class="mb-3"><span class="font-semibold">Sexe :</span> Masculin</li>
      <li class="mb-3"><span class="font-semibold">Diplôme professionnel :</span> </li>
        <li class="mb-3"><span class="font-semibold">Diplôme académique le plus élevé :</span> </li>
        <li class="mb-3"><span class="font-semibold">Lieu de naissance : {{selectedPersonnel.lieuNaiss}}</span> </li>
    </ul>
  </div>
  <div class="col-12 lg:col-4">
    <ul class="list-none p-0 m-0 text-600 mb-4 text-600">
        <li class="mb-3"><span class="font-semibold">Discipline enseignée :</span> </li>
        <li class="mb-3"><span class="font-semibold">Téléphone :</span> </li>
        <li class="mb-3"><span class="font-semibold">Email :</span> </li>
        <li class="mb-3">
          <span class="font-semibold">
            Corps/Grade :
          </span>
        </li>
        <li class="mb-3"><span class="font-semibold">Discipline d'origine :</span> </li>
    </ul>
  </div></div>
`,
})
export class AgentFormDetailsViewComponent {
  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);
}
