import {Component, WritableSignal} from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {CardModule} from "primeng/card";
import {Table, TableModule} from "primeng/table";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {DividerModule} from "primeng/divider";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {PieceJustificatif} from "../../../../core/data/mobilite/mobilite.model";
import {CalendarModule} from "primeng/calendar";

interface BesoinPersonnel {
  departement: string;
  fonction: string;
  nombre: number;
  piece: PieceJustificatif[];
  annee: Date;
}

@Component({
  selector: 'mrt-dren-besoin-personnel',
  standalone: true,
  imports: [
    SplitterModule,
    CardModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    DividerModule,
    DialogModule,
    FormsModule,
    CalendarModule
  ],
  templateUrl: './dren-besoin-personnel.component.html',
  styleUrl: './dren-besoin-personnel.component.scss'
})
export class DrenBesoinPersonnelComponent {
  besoinPersonnelDialog: boolean | WritableSignal<boolean> = false;
  besoinPersonnel: BesoinPersonnel = {} as BesoinPersonnel;

  // colonne du tableau
  colsDrenBesoinPersonnel: Cols[] = [
    {field: 'departement', header: 'Departement'},
    {field: 'fonction', header: 'Fonction'},
    {field: 'nombre', header: 'Nombre'},
    {field: 'piece', header: 'Piece'},
    {field: 'date', header: 'Annee'},
  ];

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  showBesoinPersonnelDialog() {
    this.besoinPersonnelDialog = true;
  }

}
