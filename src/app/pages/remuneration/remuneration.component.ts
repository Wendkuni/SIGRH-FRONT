import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RemunerationService} from "../../core/data/remuneration/remuneration.service";
import {Remuneration, Remunerations} from "../../core/data/remuneration/renumeration.model";
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
import {Personnel, Personnels} from "../../core/data/personals/personnel.model";

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService]
})
export class RemunerationComponent implements OnInit{
// colonne du tableau
  cols: Cols[] = [
    {field: 'nomPrenom', header: 'Nom Prenom'},
    {field: 'matricule', header: 'Matricule'},
    {field: 'fonction', header: 'Fonction'},
    {field: 'valeurMontant', header: 'Net à payer'},
    {field: 'libelleBank/codeBank', header: 'Banque/Compte'},
    {field: 'dateEffet', header: 'Date'},
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
  remunerations$!: Remunerations;
  personnelService = inject(PersonnelService);
  messageService = inject(MessageService);
  listPersonnel!: Personnels;
  formVisible: boolean = false;
  action = 'Add';
  selectRemuneration: Remuneration = {} as Remuneration;

  ngOnInit(): void {
    // Validation du formulaire
    this.remunerationForm = this.fb.group({
      matricule: this.fb.control('',[Validators.required]),
      valeurMontant: this.fb.control('',[Validators.required]),
      libelleBank: this.fb.control('',[Validators.required]),
      numCompte: this.fb.control('', [Validators.required]),
      codeBank: this.fb.control('',[Validators.required]),
      dateEffet: this.fb.control('',[Validators.required]),
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

  openNew(){
    this.formVisible = true;
    this.action = 'Add';
  }

  openEdit(remuneration: Remuneration){
    this.formVisible = true;
    this.action = 'Edit';
    this.selectRemuneration = remuneration;
    this.remunerationForm.patchValue(remuneration);
  }

  getFormData(): Remuneration {
    const formData = this.remunerationForm.value;
    return <Remuneration>{
      personnel: formData.matricule,
      valeurMontant: formData.valeurMontant,
      libelleBank: formData.libelleBank,
      codeBank: formData.codeBank,
      dateEffet: formData.dateEffet
    }
  }

  saveRemuneration(){
    const data = this.getFormData();
    if (this.action === 'Add') {
      this.createRemuneration(data);
    } else {
      this.updateRemuneration(data);
    }
  }

  private createRemuneration(remuneration: Remuneration) {
    this.remunerationService.addRemuneration(remuneration).subscribe( () =>{
      this.getRemunerations();
      this.remunerationForm.reset();
      this.formVisible = false;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel ajouter', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non ajouter', life: 3000});

      });
  }

  private updateRemuneration(remuneration: Remuneration) {
    this.remunerationService.updateRemuneration(remuneration).subscribe( () =>{
        this.getRemunerations();
        this.remunerationForm.reset();
        this.formVisible = false;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel ajouter', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non ajouter', life: 3000});

      });
  }

  deleteRemuneration(idRemuneration: number){
    this.remunerationService.deleteRemuneration(idRemuneration).subscribe( () => {
      this.getRemunerations();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel supprimer', life: 3000});
    },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non supprimer', life: 3000});

      });
  }

  close(){
    this.formVisible = false;
    this.selectRemuneration = {} as Remuneration;
    this.remunerationForm.reset();
  }



}
