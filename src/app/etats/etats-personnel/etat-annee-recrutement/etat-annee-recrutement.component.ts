import {Component, inject, OnInit} from '@angular/core';
import {Table, TableModule} from "primeng/table";
import {Cols} from "../../../core/data/primeng/primeng.model";
import {PersonnelService} from "../../../core/data/personals/personnel.service";
import {Personnels} from "../../../core/data/personals/personnel.model";
import {FilterService} from "primeng/api";
import {UpperCasePipe} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {Calendar, CalendarModule, CalendarYearChangeEvent} from "primeng/calendar";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'mrt-etat-annee-recrutement',
  standalone: true,
  imports: [
    TableModule,
    UpperCasePipe,
    RippleModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule
  ],
  templateUrl: './etat-annee-recrutement.component.html',
  styleUrl: './etat-annee-recrutement.component.scss'
})
export class EtatAnneeRecrutementComponent implements OnInit {

  // colonne du tableau
  colRecrutement: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'dteRecrutement', header: 'Date recrutement'}
  ];

  date: Date = new Date();

//   service personnel
  personnelService = inject(PersonnelService);

//   liste personnel
  personnelsList!: Personnels;

//   liste personnel filtrer
  personnelsFiltrer!: Personnels;

  // filter service
  filterService = inject(FilterService);

  ngOnInit(): void {
    this.getPersonnelsList();
  }

  // fonction pour recuperer la liste du personnel
  getPersonnelsList(): void {
    this.personnelService.getAllPersonnels().subscribe((data: Personnels) => {
      this.personnelsList = data;
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  filterYear(etatAnneeRecrutement: Table, $event: CalendarYearChangeEvent) {
    etatAnneeRecrutement.filter($event.year, 'dteRecrutement', 'contains');
  }
}
