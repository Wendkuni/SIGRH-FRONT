import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {Cols} from "../../core/data/primeng/primeng.model";
import {Observable} from "rxjs";
import {Assurance} from "../../core/data/affaireSocial-Assurance/affaire-social-assurance.model";
import {AffaireSocialAssuranceService} from "../../core/data/affaireSocial-Assurance/affaire-social-assurance.service";
import {Table, TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {AsyncPipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'mrt-affaire-social-assurance',
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
    TooltipModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    ReactiveFormsModule,
    FormValidatorsComponent,
    RouterLink
  ],
  templateUrl: './affaire-social-assurance.component.html',
  styleUrl: './affaire-social-assurance.component.scss',
  providers: [MessageService]
})
export class AffaireSocialAssuranceComponent implements OnInit{

  //   Colonnes du tableau Assurances
  cols: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom prénom'},
    {field: 'designation', header: 'Désignation'},
    {field: 'dateDebut', header: 'Date début'},
    {field: 'dateFin', header: 'Date fin'},
    {field: 'etat', header: 'Etat'},
    {field: 'nombreDePersonne', header: 'Nombre de personne'},
    {field: 'Type', header: 'Type'}
  ];
  messageService = inject(MessageService);
  listAssurances$!: Observable<Assurance[]>; //liste des assurances
  assuranceFormVisibility = false; //affiche le formulaire d'ajout d'assurance
  assuranceService= inject(AffaireSocialAssuranceService);
  fb = inject(FormBuilder);
  affSocialAssuranceForm!: FormGroup;
  action = 'Add'; //Action à effectuer sur le formulaire
  selectedAssurance: Assurance = {} as Assurance; //Assurance selectionnée
  type = [
    'Allocations familiales',
    'Assurances maladie (CNAM)'
  ];
  etat = [
    'En cours',
    'En attente',
    'Planifiée',
    'Terminée'
  ];

  ngOnInit(): void {
    this.affSocialAssuranceForm = this.fb.group({
      dateDebut: this.fb.control('', [Validators.required]),
      dateFin: this.fb.control('', [Validators.required]),
      designation: this.fb.control('', [ Validators.required]),
      etat: this.fb.control('', [Validators.required]),
      matricule: this.fb.control('', [Validators.required]),
      nomPrenom: this.fb.control('', [Validators.required]),
      nombrePersonne: this.fb.control('', [Validators.required]),
      type: this.fb.control('', [Validators.required])
    });
    this.getAllAssurances();
  }

  showAssuranceForm() {
    this.action = 'Add';
    this.assuranceFormVisibility = true;
  }

  showEditAssuranceForm(assurance: Assurance) {
    this.action = 'Edit';
    this.assuranceFormVisibility = true;
    this.selectedAssurance = assurance;
    this.affSocialAssuranceForm.patchValue(assurance);
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getAllAssurances() {
    this.listAssurances$ = this.assuranceService.getAllAssurances();
  }

  saveAssurance() {
    const data = this.getFormData();
    if(this.action === 'Add'){
      this.createAssurance(data);
    }
    else{
      this.updateAssurance(data);
    }
  }

  // Methode de recuperation des donnes du formulaire
  getFormData(): Assurance {
    return<Assurance> {
      matricule: this.affSocialAssuranceForm.value.matricule,
      nomPrenom: this.affSocialAssuranceForm.value.nomPrenom,
      designation: this.affSocialAssuranceForm.value.designation,
      dateDebut: this.affSocialAssuranceForm.value.dateDebut,
      dateFin: this.affSocialAssuranceForm.value.dateFin,
      etat: this.affSocialAssuranceForm.value.etat,
      nombrePersonne: this.affSocialAssuranceForm.value.nombrePersonne,
      type: this.affSocialAssuranceForm.value.type
    };
  }

  createAssurance(assurance: Assurance) {
    this.assuranceService.addAssurance(assurance).subscribe(
      next => {
        this.getAllAssurances();
        this.cancel();
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Assurance ajoutée avec succès'});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'ajout '});
      }
    );
  }

  updateAssurance(assurance: Assurance) {
    this.assuranceService.updateAssurance(assurance).subscribe(
      next => {
        this.getAllAssurances();
        this.cancel();
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Assurance ou Allocations familiales  modifiée avec succès'});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de la modification de Assurance ou Allocations familiales'});
      }
    );
  }

  deleteAssurance(assurance: Assurance) {
    this.assuranceService.deleteAssurance(assurance).subscribe(
      next => {
        this.getAllAssurances();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Assurance supprimée avec succès'
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Erreur lors de la suppression de l\'assurance'
        });

      });
  }

  cancel() {
    this.assuranceFormVisibility = false;
    this.affSocialAssuranceForm.reset();
    this.action = 'Add';
    this.selectedAssurance = {} as Assurance;
  }
}
