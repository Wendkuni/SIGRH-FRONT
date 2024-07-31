import {Component, WritableSignal} from '@angular/core';
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

  protected readonly colListePersonnels = [
    {field: 'nni', header: 'NNI'},
    {field: 'nomPrenom', header: 'Nom et prénom'},
    {field: 'nomPrenomArab', header: 'Nom et prénom Arab'},
    {field: 'tlphone', header: 'Téléphone'},
    {field: 'adressEmp', header: 'Adresse'},
    {field: 'lieuNaiss', header: 'Lieu naissance'},
    {field: 'dateNaiss', header: 'Date naissance'},
    {field: 'dteRecrutement', header: 'Date récrutement'},
    {field: 'bank', header: 'Banque'},
    {field: 'codeBank', header: 'Code banque'},
    {field: 'numroCpte', header: 'Numéro compte'},
    {field: 'cleRib', header: 'Clé rib'},
    {field: 'sexe', header: 'Genre'},
    {field: 'statusEmp', header: 'Statut employé'},
    {field: 'typeAgent', header: 'Type agent'},
  ];
  formDialog: boolean | WritableSignal<boolean> = false;
  typeEducation: string[] = ['Fonctionaire', 'Contractuel', 'Prestataire'];
  sexeOptions: any[] = [
    'Masculin',
    'Féminin',
  ];

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
