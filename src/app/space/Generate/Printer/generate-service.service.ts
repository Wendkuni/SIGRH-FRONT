import { Injectable } from '@angular/core';
import {Table} from "primeng/table";
import {jsPDF} from "jspdf";
import autoTable from "jspdf-autotable";
import * as FileSaver from "file-saver";
import {Cols} from "../../../core/data/primeng/primeng.model";

@Injectable({
  providedIn: 'root'
})
export class GenerateServiceService {

  constructor() { }

  exportPdf(table: Table, exportColumns: Cols[]) {
      const doc = new jsPDF();
      autoTable(doc, {
        body: [
          [
            {
              content: 'Liste du personnel',
              colSpan: 5,
              styles: {halign: 'center', fontStyle: 'bold', fontSize: 15, textColor: '#ffffff'},
            }
          ]
        ],
        theme: "plain",
        styles: {fillColor: '#1fac69'},
      });
      autoTable(doc, {
        columns: exportColumns,
        body: table.hasFilter() ? (table.filteredValue as any[]) : table.value,
        theme: 'striped',
        headStyles: {fillColor: '#1fac69', textColor: '#ffffff'},
      });
      doc.save('listPersonnel.pdf');
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
