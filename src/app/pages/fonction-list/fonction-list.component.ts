import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {FonctionListService} from "../../core/data/fonction-list/fonction-list.service";
import {Observable} from "rxjs";
import {Fonction} from "../../core/data/avancement/fonction.model";
import {Table, TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {RippleModule} from "primeng/ripple";
import {AsyncPipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'mrt-fonction-list',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    CardModule,
    RippleModule,
    TableModule,
    AsyncPipe,
    InputTextModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    InputNumberModule
  ],
  templateUrl: './fonction-list.component.html',
  styleUrl: './fonction-list.component.scss'
})
export class FonctionListComponent implements OnInit{

//   Colonnes du tableau
  cols: Cols[] = [
    {field: 'fonction', header: 'Fonction'},
    {field: 'fonctionenarabe', header: 'Fonction en arabe'},
    {field: 'corps', header: 'Corps'},
    {field: 'grade', header: 'Grade'},
    {field: 'categorie', header: 'Catégorie'},
    {field: 'echelon', header: 'Echelon'},
    {field: 'echelle', header: 'Echelle'},
    {field: 'indice', header: 'Indice'},
    {field: 'salairedebase', header: 'Salaire de base'}
  ];

  fonctionListDialogVisible = false;
  listFonctionAgent$!: Observable<Fonction[]>;
  fonctionService = inject(FonctionListService);

  ngOnInit(): void {
    this.getAllFonctionAgent();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getAllFonctionAgent() {
    this.listFonctionAgent$ = this.fonctionService.getAllFonctions();
  }

  showDialog() {
    this.fonctionListDialogVisible = true;
  }
}
