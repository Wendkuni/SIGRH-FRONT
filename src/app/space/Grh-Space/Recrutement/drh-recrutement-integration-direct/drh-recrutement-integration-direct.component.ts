import {Component, WritableSignal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmationService, MessageService} from "primeng/api";
import {personnelColonneTable} from "../../../../core/data/personals/personnel.model";
import {InputTextModule} from "primeng/inputtext";
import {Table, TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {FormValidatorsComponent} from "../../../../shared/form-validators/form-validators.component";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'mrt-drh-recrutement-integration-direct',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    InputTextModule,
    TableModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    FormValidatorsComponent,
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './drh-recrutement-integration-direct.component.html',
  styleUrl: './drh-recrutement-integration-direct.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class DrhRecrutementIntegrationDirectComponent {

  protected readonly colListePersonnels = personnelColonneTable;
  formDialog: boolean | WritableSignal<boolean> = false;

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
