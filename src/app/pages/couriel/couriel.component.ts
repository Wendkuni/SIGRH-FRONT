import {Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {Couriel} from "../../core/data/couriel/couriel.model";
import {CourielService} from "../../core/data/couriel/couriel.service";
import {Cols} from "../../core/data/primeng/primeng.model";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'mrt-couriel',
  standalone: true,
  imports: [
    CardModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    InputTextModule,
    DatePipe
  ],
  templateUrl: './couriel.component.html',
  styleUrl: './couriel.component.scss',
  providers: [MessageService]
})
export class CourielComponent implements OnInit{


  showDialog = false;
  listCouriels$!: Couriel[]; //liste des couriels
  courielService = inject(CourielService);

  //   Colonnes du tableau Couriel
  cols: Cols[] = [
    {field: 'libelle', header: 'Libellé'},
    {field: 'type', header: 'Type'},
    {field: 'source', header: 'Source'},
    {field: 'sens', header: 'Sens'},
    {field: 'categorie', header: 'Catégorie'},
    {field: 'observation', header: 'Observation'},
    {field: 'designation', header: 'Désignation'},
    {field: 'ventilation', header: 'Ventilation'},
    {field: 'dateVentilation', header: 'Date Ventilation'},
    {field: 'object', header: 'Object'},
    {field: 'numDoc', header: 'N/DOC'},
    {field: 'annotation', header: 'Annotation'},
    {field: 'se', header: 'SE'},
    {field: 'dateCouriel', header: 'Date Couriel'},
  ];

  ngOnInit(): void {
    this.getAllCouriels();
  }

  // Methode pour filtrer les elements du tableau
  // onGlobalFilter(table: Table, event: Event) {
  //     table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  // }



  //Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showDialog = true;
  }

  // Methode pour lister un couriel
  private getAllCouriels() {
    this.courielService.getAllCouriels().subscribe((response:Couriel[]) => {
      this.listCouriels$ = response;
    });
  }

}
