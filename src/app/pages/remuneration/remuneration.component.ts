import {Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RemunerationService} from "../../core/data/remuneration/remuneration.service";
import {Remuneration} from "../../core/data/remuneration/renumeration.model";
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {Table, TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {MessageService} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {UpperCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Personnel} from "../../core/data/personals/personnel.model";

@Component({
  selector: 'mrt-remuneration',
  standalone: true,
    imports: [
        ToastModule,
        CardModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        InputTextModule,
        TooltipModule,
        DialogModule,
        ReactiveFormsModule,
        DropdownModule,
        FormValidatorsComponent,
        InputNumberModule,
        CalendarModule,
        TabViewModule,
        UpperCasePipe,
        RouterLink
    ],
  templateUrl: './remuneration.component.html',
  styleUrl: './remuneration.component.scss',
  providers: [MessageService]
})
export class RemunerationComponent implements OnInit{
// colonne du tableau
  cols: Cols[] = [
    {field: 'nometprenom', header: 'Nom Prenom'},
    {field: 'matricule', header: 'Matricule'},
    {field: 'fonction', header: 'Fonction'},
    {field: 'netapayer', header: 'Net à payer'},
    {field: 'banque/complte', header: 'Banque/Compte'},
    {field: 'date', header: 'Date'},
    {field: 'corps', header: 'Corps'},
    {field: 'grade', header: 'Grade'},
    {field: 'echelon', header: 'Echelon'},
    {field: 'echelle', header: 'Echelle'},
    {field: 'indice', header: 'Indice'}
  ];

  // colonne indemnite par fonction
  colsIndemnite: Cols[] = [
    {field: 'libelle', header: 'Libelle'},
    {field: 'valeur', header: 'Valeur'}
  ];

  remunerationForm!: FormGroup;
  fb = inject(FormBuilder);
  remunerationService = inject(RemunerationService);
  remunerations$!: Remuneration[];
  personnelService = inject(PersonnelService);
  listPersonnel!: Personnel[];
  formVisible: boolean = false;

  ngOnInit(): void {
    // Validation du formulaire
    this.remunerationForm = this.fb.group({
      matricule: this.fb.control('',[Validators.required]),
      netapayer: this.fb.control('',[Validators.required]),
      banquecompte: this.fb.control('',[Validators.required]),
      numCompte: this.fb.control('',[Validators.required]),
      date: this.fb.control('',[Validators.required]),
    });
    this.getRemunerations();
    // this.getPersonnels();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  // Methode pour recuperer les remunerations
  getRemunerations(){
    this.remunerationService.getAllRemunerations().subscribe((data) => {
      this.remunerations$ = data;
      console.log(this.remunerations$);
    });
  }

  // getPersonnels(){
  //   this.personnelService.getAllPersonnels().subscribe((data) => {
  //     this.listPersonnel = data;
  //   });
  // }

  showFormDialog(){
    this.formVisible = true;
  }

  showEditFormDialog(remuneration: Remuneration){
    this.formVisible = true;
    this.remunerationForm.patchValue(remuneration);
  }

  close(){
    this.formVisible = false;
  }


}
