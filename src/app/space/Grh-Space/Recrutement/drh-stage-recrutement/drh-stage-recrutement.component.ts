import {Component, WritableSignal} from '@angular/core';
import {personnelColonneTable} from "../../../../core/data/personals/personnel.model";
import {Table, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {ConfirmationService, MessageService, SharedModule} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";

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
    ToolbarModule,
    DialogModule,
    CalendarModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule
  ],
  templateUrl: './drh-stage-recrutement.component.html',
  styleUrl: './drh-stage-recrutement.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class DrhStageRecrutementComponent {

  protected readonly colListePersonnels = personnelColonneTable;
  formDialog: boolean | WritableSignal<boolean> = false;
  typeEducation: any[] = ['Contractuel(le)', 'Prestataire'];

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  showFormDialog() {
    this.formDialog = true;
  }

  close() {
    this.formDialog = false;
  }
}
