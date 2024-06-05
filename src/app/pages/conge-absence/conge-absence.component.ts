import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DemandeConge} from "../../core/data/conge/conge_absence.model";
import {Observable} from "rxjs";
import {CongeService} from "../../core/data/conge/conge.service";
import {Table, TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AsyncPipe, DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {TagModule} from "primeng/tag";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {CdkScrollable} from "@angular/cdk/overlay";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MessageService} from "primeng/api";

@Component({
  selector: 'mrt-conge-absence',
  standalone: true,
  imports: [
    ToastModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    AsyncPipe,
    InputTextModule,
    DatePipe,
    TagModule,
    TooltipModule,
    DialogModule,
    CdkScrollable,
    ReactiveFormsModule,
    FormValidatorsComponent,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule
  ],
  templateUrl: './conge-absence.component.html',
  providers: [MessageService]
})
export class CongeAbsenceComponent implements OnInit{

  // colonne du tableau
  colNT: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'nometprenom', header: 'Nom et prénom' },
    { field: 'raison', header: 'Type' },
    { field: 'dateEffet', header: 'Date Effet' },
    { field: 'intervalleConge', header: 'Intervalle Date'},
    { field: 'autorisation', header:'Autorisation'},
    { field: 'motif', header: 'Motif'},
    { field: 'signataire', header: 'Signataire'}
  ];
  showFormVisibility = false;
  rangeDates: Date[] | undefined;
  formDemande!: FormGroup;
  fb = inject(FormBuilder);
  action = 'Add';
  selectedDemande: DemandeConge = {} as DemandeConge;
  selectedRaison: string | null = null;
  raison = [
    'Absence',
    'Congé',
    'Congé Viduite',
    'Congé de maladie',
    'Congé de maternité',
    'Congé de pelerinage',
    'Disponibilite',
    'Detachement'
  ];
  autorisation = [
    'Demande acceptée',
    'Demande en cours',
    'Demande refusée',
    'Demande annulée'
  ];

  //variable pour recuperer la liste de tous les personnels
  listDemande$!: Observable<DemandeConge[]>;
  congeService = inject(CongeService);


  ngOnInit(): void {
    this.formDemande = this.fb.group({
      matricule: this.fb.control('', [Validators.required]),
      raison: this.fb.control('', [Validators.required]),
      dateEffet: this.fb.control('', [Validators.required]),
      nombrejr: this.fb.control('', [Validators.required]),
      autorisation: this.fb.control('', [Validators.required]),
      motif: this.fb.control('', [Validators.required]),
      signataire: this.fb.control('', [Validators.required])
    });

    this.getAllDemandeConge();
  }

  showForm() {
    this.showFormVisibility = true;
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  async getAllDemandeConge() {
    this.listDemande$ = await this.congeService.getAllDemandes();
  }

// Fonction  qui retourne le style css du status de l'employer
  getStatusSeverity(autorisation: any): any {
    if (autorisation === "Demande acceptée") {
      return 'success'
    }
    else if(autorisation === "Demande en cours"){
      return 'primary'
    }
    return 'danger'
  }

  addDemande() {
    this.action = 'Add';
    this.showFormVisibility = true;
  }

  editDemande(dmd:DemandeConge) {
    this.action = 'Edit';
    this.showFormVisibility = true;
    this.selectedDemande = dmd;
    this.formDemande.patchValue(this.selectedDemande);
  }

  acceptDemande(dmd:DemandeConge) {
    this.showFormVisibility = true;
    this.selectedDemande = dmd;
    this.action= 'Accetp';
  }

  rejectDemande(dmd:DemandeConge) {
    this.showFormVisibility = true;
    this.action= 'Refuse';
    this.selectedDemande = dmd;
  }

  cancelDemande(dmd:DemandeConge) {
    this.showFormVisibility = true;
    this.action= 'Cancel';
    this.selectedDemande = dmd;
  }


  // Methode pour le formulaire
  onSubmit() {

  }

  cancel() {
    this.showFormVisibility = false;
    this.formDemande.reset();
    this.action = 'Add';
    this.selectedDemande = {} as DemandeConge;
  }

}
