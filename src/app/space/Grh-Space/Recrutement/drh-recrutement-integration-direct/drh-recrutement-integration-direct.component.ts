import {Component, inject, OnInit, WritableSignal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ConfirmationService, MessageService} from "primeng/api";
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
import {JsonServerService} from "../../../../core/data/json-server/json-server.service";

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
export class DrhRecrutementIntegrationDirectComponent implements OnInit {

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
  actif: string[] = ['Actif', 'Inactif'];
  listePersonnels!: any;
  selectedPersonnel: any = {};
  jsonService = inject(JsonServerService);
  sexeOptions: any[] = [
    'Masculin',
    'Féminin',
  ];

  ngOnInit() {
    this.getAllPersonnelsJson();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  showFormDialog() {
    this.formDialog = true;
  }

  close() {
    this.formDialog = false;
  }

  getAllPersonnelsJson() {
    this.jsonService.getAllPersonnels().subscribe((data) => {
      this.listePersonnels = data;
    });
  }
}
