import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { Personnel } from '../../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../../core/data/primeng/primeng.model';

interface AffectSortant {
  NNI: any;
  NomPrenom: any;
  sexe: string;
  DateNaissance: string;
  DiplomeAcademique: string;
  DiplomeProfessionel: string;
  BilanAcademie: string;
  Corps: string;
  SituationMatrimonial: string;
  Rang: string;
  ChoixDuMajor: string;
  Dren: string;
}

@Component({
  selector: 'mrt-affectation-necessite-service',
  standalone: true,
  imports: [
    ButtonModule,
    ConfirmDialogModule,
    DatePipe,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    ReactiveFormsModule,
    RippleModule,
    SharedModule,
    TableModule,
    ToastModule,
    TooltipModule,
    CardModule,
    FormsModule,
    RouterLink,
    CalendarModule,
  ],
  templateUrl: './affectation-necessite-service.component.html',
  providers: [MessageService, ConfirmationService],
})
export class AffectationNecessiteServiceComponent {
  affectationsortant: AffectSortant = {} as AffectSortant;

  action = 'Add';

  list = Array<AffectSortant>();

  messageService = inject(MessageService);
  confirmationService = inject(ConfirmationService);

  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  colsForm: Cols[] = [
    { field: 'NNI', header: 'NNI' },
    { field: 'NP', header: 'Nom et Prénom' },
    { field: 'Sexe', header: 'Sexe' },
    { field: 'DP', header: 'Diplôme Professionnel' },
    { field: 'DN', header: 'Date Naissance' },
    { field: 'DA', header: 'Diplôme Académique' },
    { field: 'BA', header: 'Bilan Académique' },
    { field: 'Cor', header: 'Corp' },
    { field: 'SM', header: 'Situation Matrimoniale' },
    { field: 'Rang', header: 'Rang' },
    { field: 'CM', header: 'Choix major' },
    { field: 'D', header: 'DREN' },
  ];

  Listcorps = [
    'Instituteur',
    'Insp Ens Fond',
    'Prof de college',
    'Prof Ens Secondaire',
    'Insp Adj Ens Fond',
  ];

  situationMatrimonialeOptions = ['Célibataire', 'Marié', 'Divorcé', 'Veuf'];

  ListDren = ['Dren1', 'Dren2', 'Dren3', 'Dren4'];
  Sexe = ['Masculin', 'Feminin'];

  ajouterForm() {
    if (this.action == 'Add') {
      if (this.affectationsortant !== null) {
        this.list.push(this.affectationsortant);
        this.affectationsortant = {} as AffectSortant;

        // this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Tous les champs sont obligatoires'});
      }
    } else {
      console.log('Modification');
    }
  }

  valider() {
    this.list = new Array<AffectSortant>();
    this.messageService.add({
      severity: 'success',
      summary: 'Reussi',
      detail: "Sortie d'affectations valider",
    });
  }

  removeFormulaire(index: number) {
    this.list.splice(index, 1);
  }
}
