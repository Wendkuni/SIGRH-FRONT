import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../../core/data/primeng/primeng.model";
import {PersonnelService} from "../../../core/data/personals/personnel.service";
import {Table, TableModule} from "primeng/table";
import {jsPDF} from "jspdf";
import autoTable from "jspdf-autotable";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {MessageService, SharedModule} from "primeng/api";
import {UpperCasePipe} from "@angular/common";
import {ToastModule} from "primeng/toast";
import * as FileSaver from "file-saver";

@Component({
  selector: 'mrt-etat-lieu-affectation',
  standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        TableModule,
        UpperCasePipe,
        ToastModule
    ],
  templateUrl: './etat-lieu-affectation.component.html',
  providers: [MessageService]
})
export class EtatLieuAffectationComponent implements OnInit{

  colDren: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'nomPrenomArab', header: 'Nom Prenom Arab'},
    {field: 'nni', header: 'Nni'},
    {field: 'affectation', header: 'Lieu affectation'}
  ];

  listDispo!: any[];

  exportColumns!: any;

  personnelService = inject(PersonnelService);

  notificationService = inject(MessageService);

  ngOnInit(): void {
    this.personnelService.getStatPersonnel().subscribe((response) => {
      this.listDispo = response;
      console.log(this.listDispo)
    });
    this.exportColumns = this.colDren.map(col => ({title: col.header, dataKey: col.field}));
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }

  exportPdf(table: Table) {
    if(table.value.length > 0){
      const doc = new jsPDF();
      autoTable(doc, {
        body: [
          [
            {
              content: 'Liste du personnel par lieu affectation',
              colSpan: 5,
              styles: {halign: 'center', fontStyle: 'bold', fontSize: 15, textColor: '#ffffff'},
            }
          ]
        ],
        theme: "plain",
        styles: {fillColor: '#198754'},
      });
      autoTable(doc, {
        columns: this.exportColumns,
        body: table.hasFilter() ? (table.filteredValue as any[]) : table.value,
        theme: 'striped',
        headStyles: {fillColor: '#198754', textColor: '#ffffff'},
      });
      doc.save('listPersonnelRecrutement.pdf');
    }
    else {
      this.notificationService.add({severity: 'warn', summary: 'Aucune donnée', detail: 'Aucune donnée à exporter'});
    }
  }

  exportExcel(table: Table) {
    if(table.hasFilter()){
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(
          this.limiteData(table.filteredValue as any[])
        );
        const workbook = {
          Sheets: { 'data': worksheet },
          SheetNames: ['data']
        };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "personnels");
      });
    }
    else {
      import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(
          this.limiteData(table.value as any[])
        );
        const workbook = {
          Sheets: { 'data': worksheet },
          SheetNames: ['data']
        };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "personnels");
      });
    }
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  limiteData(table: any[]):any{
    return table.map(item =>({
        Matricule: item.matricule,
        NomPrenom: item.nomPrenom,
        NomPrenomArabe: item.nomPrenomArabe,
        Nni: item.nni,
        Adresse: item.adressEmp,
        DateNaissance: item.dateNaiss,
        LieuNaissance: item.lieuNaiss,
        DateRecrutement: item.dteRecrutement,
        DateTitularisation: item.dteTitularisation,
        DateSortie: item.dteSortie,
        DateDebutContrat: item.debutCntrat,
        DateFinContrat: item.finCntrat,
        Banque: item.bank,
        CodeBanque: item.codeBank,
        NUmeroCompte: item.numroCpte,
        CleRib: item.cleRib,
        Detacher: item.detacher,
        StatusEmploye:item.statusEmp,
        MinistereOrigine: item.ministerOrigine,
        TypeEducation: item.typeeducation,
        ActifOuNon: item.actifOrNot
      })
    )
  }

}
