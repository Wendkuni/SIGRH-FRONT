import {Component, inject, OnInit} from '@angular/core';
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {CardModule} from "primeng/card";
import {Table, TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";
import {AffectationService} from "../../../../core/data/affectation/affectation.service";
import {PermutationList} from "../../../../core/data/mobilite/mobilite.model";
import {DatePipe} from "@angular/common";
import {AccordionModule} from "primeng/accordion";
import {DividerModule} from "primeng/divider";
import {TabViewModule} from "primeng/tabview";
import {TooltipModule} from "primeng/tooltip";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'mrt-traitement-permutation',
  standalone: true,
    imports: [
        ToastModule,
        ConfirmDialogModule,
        CardModule,
        TableModule,
        InputTextModule,
        DialogModule,
        DropdownModule,
        RippleModule,
        DatePipe,
        AccordionModule,
        DividerModule,
        TabViewModule,
        TooltipModule,
        ToolbarModule
    ],
  templateUrl: './traitement-permutation.component.html',
  styleUrl: './traitement-permutation.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TraitementPermutationComponent implements OnInit{

  ficheDialogeShow: boolean = false;
  listeDemande: PermutationList =[];
  mobiliteService = inject(AffectationService);
  selectDemande!: any ;
  // colonne du tableau
  colDossiersPermutaitons: any = [
    { field: 'N°', header: 'N°' },
    { field: 'matricule1', header: 'Matricule permutant' },
    { field: 'nomPrenom1', header: 'Prénoms Nom permutant' },
    { field: 'matricule2', header: 'Matricule copermutant' },
    { field: 'nomPrenom2', header: 'Prénoms Nom copermutant' },
    {field: 'datePermutation', header: 'Date permutation'},
    { field: 'option', header: 'Option' },
    { field: 'lieu', header: 'Lieu de permutation' },
  ];

  // Methode pour filtrer les elements du tableau

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // List permutation agent connectee
  getAllDemandePermutationAgent() {
    this.mobiliteService.getAllPermutationJson().subscribe((response) => {
      this.listeDemande = response;
      console.log(this.listeDemande)
    });
  }

  onHideDialog(){
    this.ficheDialogeShow = false;
    this.ficheDialogeShow = false;
    this.selectDemande = null;
  }

  traitementDialog() {
    this.ficheDialogeShow = true;
  }

  ngOnInit(): void {
    this.getAllDemandePermutationAgent();
  }

  viewPermutationDetails(dossier: any) {
    this.ficheDialogeShow = true;
  }
}
