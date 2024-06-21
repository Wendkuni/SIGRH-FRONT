import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {SelectItem, SharedModule} from "primeng/api";
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {Table, TableModule} from "primeng/table";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import {UpperCasePipe} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {AccordionModule} from "primeng/accordion";
import {Personnels} from "../../core/data/personals/personnel.model";
import {EtatService} from "../../core/data/etats/etat.service";

@Component({
  selector: 'mrt-etats-personnel',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    RippleModule,
    SharedModule,
    TabViewModule,
    TableModule,
    UpperCasePipe,
    DropdownModule,
    FormsModule,
    DataViewModule,
    AccordionModule
  ],
  templateUrl: './etats-personnel.component.html',
  styleUrl: './etats-personnel.component.scss'
})
export class EtatsPersonnelComponent implements OnInit{


  colDren: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'direction', header: 'Direction'}
  ];

  colLieu: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'lieu', header: 'Lieu affectation'}
  ];

  colDispo: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'}
  ];

  colActif: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'}
  ];

  colRecrutement: Cols [] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'dteRecrutement', header: 'Date recrutement'}
  ];

  colRegion: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'region', header: 'Region'}
  ];

  actif = [
    'actif',
    ' pas actif'
  ]

  lisPersonnelActif!: Personnels;
  lisPersonnelNonActif!: Personnels;
  etatService = inject(EtatService);

  exportColumns!: any;
  list!: any[];
  listDispo!: any[];
  @ViewChild('dt') table!: Table;
  personalService = inject(PersonnelService);
  activity = '';

  ngOnInit(): void {
this.getPersonnelActif();

    this.personalService.getStatPersonnel().subscribe((response) => {
      this.list = response;
    });

    this.personalService.getPersonnelDisponible().subscribe((response) => {
      this.listDispo = response;
    });

    this.exportColumns = this.colDren.map(col => ({title: col.header, dataKey: col.field}));
  }

  onGlobalFilter(event: Event) {
    this.table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onGlobalFilterDispo(tableDispo: Table, event: Event) {
    tableDispo.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }


  exportPdf(table: Table) {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        const doc = new jsPDF.default('landscape', 'pt');
        autoTable(doc, {columns: this.exportColumns, body: table.value});

        doc.save('listPersonnel.pdf');
      })
    })
  }

  onSortChange($event: any) {

  }
personnelList!: Personnels
  private getPersonnelActif() {
    this.personalService.getAllPersonnels().subscribe(res => {
      this.personnelList = res;
    })
  }
}
