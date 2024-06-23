import {Component, inject, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {personnelColonneTable, PersonnelResponse} from "../../core/data/personals/personnel.model";
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {SelectItem} from "primeng/api";
import {TableModule} from "primeng/table";
import {Cols} from "../../core/data/primeng/primeng.model";
import {InputTextModule} from "primeng/inputtext";
import {onGlobalFilter} from "../../core/config";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {TabViewModule} from "primeng/tabview";
import{jsPDF} from 'jspdf';
import autoTable from "jspdf-autotable";
import {iterator} from "rxjs/internal/symbol/iterator";

@Component({
  selector: 'mrt-stats',
  standalone: true,
  imports: [
    CardModule,
    DataViewModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    TabViewModule
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit{

  colDren: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'region', header: 'Region'},
    {field: 'direction', header: 'Direction'},
    {field: 'affectation', header: 'Lieu Affectation'}
  ];

  colDispo: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'disponible', header: 'Disponible'},
    {field: 'actifornot', header: 'Actif ou non'},
    {field: 'absent', header: 'Absent'},
    {field: 'congé', header: 'congé'}
  ];
  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  listPersonnel$!: PersonnelResponse[];
  personalService = inject(PersonnelService);
  protected readonly onGlobalFilter = onGlobalFilter;

  ngOnInit(): void {
    this.sortOptions = [
      { label: 'Direction', value: 'direction' },
      { label: 'Region', value: 'region' },
      { label: 'Affectation', value: 'affectation' }
    ];

    this.personalService.getAllPersonnels().subscribe((response) => {
      this.listPersonnel$ = response;
    });

  }

  // generatePdf() {
  //   // Create a new PDF document.
  //   const doc = new jsPDF();
  //
  //   // Add content to the PDF.
  //   doc.setFontSize(16);
  //   doc.text('Etats personnel', 10, 10);
  //   doc.setFontSize(12);
  //
  //   doc.text(
  //     'This is a comprehensive guide on generating PDFs with Angular.', 10, 20  );
  //
  //   // Create a table using `jspdf-autotable`.
  //   const headers = [['Matricule', 'Nom Prenom', 'Region','Direction','Lieu Affectation']];
  //   const data = [
  //
  // ];
  //
  //   autoTable(doc, {
  //     head: headers,
  //     body: data,
  //     startY: 30, // Adjust the `startY` position as needed.
  //   });
  //
  //   // Save the PDF.
  //   doc.save('table.pdf');
  // }

}
