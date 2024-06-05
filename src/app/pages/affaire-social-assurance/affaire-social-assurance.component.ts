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
    InputNumberModule
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

  showAssuranceForm() {
    this.assuranceFormVisibility = true;
  }

  ngOnInit(): void {
    this.getAllAssurances();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getAllAssurances() {
    this.listAssurances$ = this.assuranceService.getAllAssurances();
  }

  saveAssurance(assurance: Assurance) {
    if(assurance.id){
      this.createAssurance(assurance);
    }
    else{
      this.updateAssurance(assurance);  }
  }

  createAssurance(assurance: Assurance) {
    this.assuranceService.addAssurance(assurance).subscribe(
      next => {
        this.getAllAssurances();
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Assurance ajoutée avec succès'});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de l\'ajout de l\'assurance'});
      }
    );
  }

  updateAssurance(assurance: Assurance) {
    this.assuranceService.updateAssurance(assurance).subscribe(
      next => {
        this.getAllAssurances();
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Assurance modifiée avec succès'});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Erreur lors de la modification de l\'assurance'});
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

}
