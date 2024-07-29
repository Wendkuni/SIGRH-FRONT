import {Component} from '@angular/core';
import {personnelColonneTable} from "../../../../core/data/personals/personnel.model";
import {Table, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmationService, MessageService, SharedModule} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";

@Component({
  selector: 'mrt-drh-stage-recrutement',
  standalone: true,
  imports: [
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    SharedModule,
    TableModule,
    ToastModule,
    ToolbarModule
  ],
  templateUrl: './drh-stage-recrutement.component.html',
  styleUrl: './drh-stage-recrutement.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class DrhStageRecrutementComponent {

  protected readonly colListePersonnels = personnelColonneTable;

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
