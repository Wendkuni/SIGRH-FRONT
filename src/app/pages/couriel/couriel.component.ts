import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {Courier, Couriers} from "../../core/data/couriel/couriel.model";
import {CourielService} from "../../core/data/couriel/couriel.service";
import {Cols} from "../../core/data/primeng/primeng.model";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {Table, TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {courierStore} from "../../core/state";

@Component({
  selector: 'mrt-couriel',
  standalone: true,
  imports: [
    CardModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    InputTextModule,
    DatePipe,
    DialogModule,
    CalendarModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    FormValidatorsComponent,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule
  ],
  templateUrl: './couriel.component.html',
  styleUrl: './couriel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ MessageService]
})
export class CourielComponent implements OnInit{

  store = inject(courierStore);
  listCouriers$= this.store.couriers(); //liste des couriers
  courielService = inject(CourielService);
  showFormDialog: boolean = false;
  selectedCouriel: Courier = {} as Courier;
  //   Colonnes du tableau Couriel
  cols: Cols[] = [
    {field: 'libelle', header: 'Libellé'},
    {field: 'type', header: 'Type'},
    {field: 'source', header: 'Source'},
    {field: 'sens', header: 'Sens'},
    {field: 'categorie', header: 'Catégorie'},
    {field: 'observation', header: 'Observation'},
    {field: 'designation', header: 'Désignation'},
    {field: 'ventilation', header: 'Ventilation'},
    {field: 'dateVentilation', header: 'Date Ventilation'},
    {field: 'object', header: 'Object'},
    {field: 'numDoc', header: 'N/DOC'},
    {field: 'annotation', header: 'Annotation'},
    {field: 'se', header: 'SE'},
    {field: 'dateCouriel', header: 'Date Couriel'},
  ];
  action = 'Add';
  courielForm = inject(FormBuilder).group({
    libelle: new FormControl('',[Validators.required]),
    type: new FormControl('',[Validators.required]),
    source: new FormControl('',[Validators.required]),
    sens: new FormControl('',[Validators.required]),
    categorie: new FormControl('',[Validators.required]),
    observation: new FormControl('',[Validators.required]),
    designation: new FormControl('',[Validators.required]),
    ventilation: new FormControl('',[Validators.required]),
    dateVentilation: new FormControl('',[Validators.required]),
    object: new FormControl('',[Validators.required]),
    numDoc: new FormControl('',[Validators.required]),
    annotation: new FormControl('',[Validators.required]),
    se: new FormControl('',[Validators.required]),
    dateCouriel: new FormControl('',[Validators.required])

  });

  ngOnInit(): void {
    this.getAllCouriels();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  //Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showFormDialog = true;
  }

  // Methode pour modifier un couriel
  showEditForm(couriel: Courier) {
    this.action = 'Edit';
    this.selectedCouriel = couriel;
    this.showFormDialog = true;
    this.courielForm.patchValue(couriel);
  }

  getData() {
    return<Courier>{
      libelle: this.courielForm.get('libelle')?.value,
    }
  }

  // Methode pour lister le couriel
  private getAllCouriels() {
    this.courielService.getAllCouriels().subscribe((response:Courier[]) => {
      this.listCouriers$ = response;
    });
  }

  // Methode pour ajouter un couriel
  addCouriel(courier: Courier) {
    this.store.addCourier(courier);
  }

  // Methode pour fermer le dialog
  cancel() {
    this.selectedCouriel = {} as Courier;
    this.showFormDialog = false;
    this.courielForm.reset();
  }
}
