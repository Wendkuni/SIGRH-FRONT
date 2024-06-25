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
import {EtatActifComponent} from "./etat-actif/etat-actif.component";
import {EtatAnneeRecrutementComponent} from "./etat-annee-recrutement/etat-annee-recrutement.component";
import {EtatDirectionComponent} from "./etat-direction/etat-direction.component";
import {AffectationComponent} from "../../pages/affectation/affectation.component";
import {EtatLieuAffectationComponent} from "./etat-lieu-affectation/etat-lieu-affectation.component";
import {EtatRegionComponent} from "./etat-region/etat-region.component";

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
    AccordionModule,
    EtatActifComponent,
    EtatAnneeRecrutementComponent,
    EtatDirectionComponent,
    AffectationComponent,
    EtatLieuAffectationComponent,
    EtatRegionComponent
  ],
  template:`
    <p-card>
      <h2 class="text-center underline mb-5">ETATS PERSONNELS</h2>

      <p-tabView >
        <p-tabPanel header="Actif">
          <mrt-etat-actif></mrt-etat-actif>
        </p-tabPanel>
        <p-tabPanel header="Annee Recrutement">
          <mrt-etat-annee-recrutement></mrt-etat-annee-recrutement>
        </p-tabPanel>
        <p-tabPanel header="Direction">
          <mrt-etat-direction></mrt-etat-direction>
        </p-tabPanel>
<!--        <p-tabPanel header="Disponible">-->
<!--          <p-accordion>-->
<!--            <p-accordionTab header="Liste du personnel disponible" [selected]="false" class="line-height-3 m-0">-->
<!--              <p-table-->
<!--                [columns]="colDispo"-->
<!--                [value]="list"-->
<!--                #dt-->
<!--                dataKey="id"-->
<!--                [rows]="5"-->
<!--                [showCurrentPageReport]="true"-->
<!--                currentPageReportTemplate="Page {currentPage} sur {totalPages}"-->
<!--                [paginator]="true"-->
<!--                styleClass="p-datatable-gridlines p-datatable-striped"-->
<!--                responsiveLayout="scroll"-->
<!--                [rowHover]="true"-->
<!--                [rowsPerPageOptions]="[5,10, 20, 50]"-->
<!--                tableStyleClass="p-datatable-gridlines"-->
<!--              >-->
<!--                <ng-template pTemplate="caption">-->
<!--                  <div class="flex justify-content-start flex-column sm:flex-row">-->
<!--                    <button type="button"-->
<!--                            pButton pRipple-->
<!--                            icon="pi pi-file-excel"-->
<!--                            class="p-button-success mr-2"-->
<!--                            label="Excel"-->
<!--                    ></button>-->
<!--                    <button type="button"-->
<!--                            pButton pRipple-->
<!--                            icon="pi pi-file-pdf"-->
<!--                            label="Pdf"-->
<!--                            class="p-button-warning mr-2"-->
<!--                            (click)="exportPdf(dt)">-->
<!--                    </button>-->
<!--                  </div>-->

<!--                </ng-template>-->
<!--                <ng-template let-columns pTemplate="header">-->
<!--                  <tr>-->
<!--                    @for (col of columns; track col.field) {-->
<!--                      <th-->
<!--                        [pSortableColumn]="col.field"-->
<!--                        class="font-weight-bold "-->
<!--                      >-->
<!--                        {{ col.header }}-->
<!--                        @if (col.header != 'Photo') {-->
<!--                          <p-sortIcon [field]="col.field"></p-sortIcon>-->
<!--                        }-->
<!--                      </th>-->
<!--                    }-->
<!--                  </tr>-->
<!--                </ng-template>-->
<!--                <ng-template pTemplate="body" let-personnel>-->
<!--                  <tr class="align-items-center align-content-center">-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.matricule }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nomPrenom  | uppercase }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nomPrenomArab }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nni }}-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                </ng-template>-->
<!--              </p-table>-->
<!--            </p-accordionTab>-->
<!--            <p-accordionTab header="Liste du personnel non disponible" [selected]="false" class="line-height-3 m-0">-->
<!--              <p-table-->
<!--                [columns]="colDispo"-->
<!--                [value]="list"-->
<!--                #dt-->
<!--                dataKey="id"-->
<!--                [rows]="5"-->
<!--                [showCurrentPageReport]="true"-->
<!--                currentPageReportTemplate="Page {currentPage} sur {totalPages}"-->
<!--                [paginator]="true"-->
<!--                styleClass="p-datatable-gridlines p-datatable-striped"-->
<!--                responsiveLayout="scroll"-->
<!--                [rowHover]="true"-->
<!--                [rowsPerPageOptions]="[5,10, 20, 50]"-->
<!--                tableStyleClass="p-datatable-gridlines"-->
<!--              >-->
<!--                <ng-template pTemplate="caption">-->
<!--                  <div class="flex justify-content-start flex-column sm:flex-row">-->
<!--                    <button type="button"-->
<!--                            pButton pRipple-->
<!--                            icon="pi pi-file-excel"-->
<!--                            class="p-button-success mr-2"-->
<!--                            label="Excel"-->
<!--                    ></button>-->
<!--                    <button type="button"-->
<!--                            pButton pRipple-->
<!--                            icon="pi pi-file-pdf"-->
<!--                            label="Pdf"-->
<!--                            class="p-button-warning mr-2"-->
<!--                            (click)="exportPdf(dt)">-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </ng-template>-->
<!--                <ng-template let-columns pTemplate="header">-->
<!--                  <tr>-->
<!--                    @for (col of columns; track col.field) {-->
<!--                      <th-->
<!--                        [pSortableColumn]="col.field"-->
<!--                        class="font-weight-bold "-->
<!--                      >-->
<!--                        {{ col.header }}-->
<!--                        @if (col.header != 'Photo') {-->
<!--                          <p-sortIcon [field]="col.field"></p-sortIcon>-->
<!--                        }-->
<!--                      </th>-->
<!--                    }-->
<!--                  </tr>-->
<!--                </ng-template>-->
<!--                <ng-template pTemplate="body" let-personnel>-->
<!--                  <tr class="align-items-center align-content-center">-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.matricule }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nomPrenom  | uppercase }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nomPrenomArab }}-->
<!--                    </td>-->
<!--                    <td-->
<!--                      style="min-width: 15rem">-->
<!--                      {{ personnel.nni }}-->
<!--                    </td>-->
<!--                  </tr>-->
<!--                </ng-template>-->
<!--              </p-table>-->
<!--            </p-accordionTab>-->
<!--          </p-accordion>-->
<!--        </p-tabPanel>-->
        <p-tabPanel header="Lieu Affectation">
          <mrt-etat-lieu-affectation></mrt-etat-lieu-affectation>
        </p-tabPanel>
        <p-tabPanel header="Region">
          <mrt-etat-region></mrt-etat-region>
        </p-tabPanel>
      </p-tabView>
    </p-card>

  `
})
export class EtatsPersonnelComponent implements OnInit{


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
