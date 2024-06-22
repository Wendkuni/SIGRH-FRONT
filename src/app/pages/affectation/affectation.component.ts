import {Component, inject, Input, OnInit} from '@angular/core';
import {Mobilite} from "../../core/data/affectation/mobilite.model";
import {Cols} from "../../core/data/primeng/primeng.model";
import {AffectationService} from "../../core/data/affectation/affectation.service";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe} from "@angular/common";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {TooltipModule} from "primeng/tooltip";
import {Personnel} from "../../core/data/personals/personnel.model";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'mrt-affectation',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CardModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    DatePipe,
    InputNumberModule,
    CalendarModule,
    TooltipModule,
    ReactiveFormsModule
  ],
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.scss',
  providers: [ MessageService]
})
export class AffectationComponent implements OnInit{

  showDialog = false;
  listAffections$!: Mobilite[]; //liste des affections
  mobiliteService = inject(AffectationService);
  @Input() personnel!: Personnel;
  fb = inject(FormBuilder);
  action = 'Add';
  selectedAffection: Mobilite = {} as Mobilite;
  messageService = inject(MessageService);
  affectionForm = this.fb.group({
    localite: this.fb.control('',[Validators.required]),
    serviceEcole: this.fb.control('',[Validators.required]),
    dateEffet: this.fb.control('',[Validators.required]),
    nature: this.fb.control('',[Validators.required]),
    dren: this.fb.control('',[Validators.required]),
    notePedagogiq: this.fb.control('',[Validators.required]),
    moughataa: this.fb.control('',[Validators.required])
  });

  cols: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'nometprenom', header: 'Nom Prenom' },
    {field: 'nature', header: 'Nature'},
    {field: 'dren', header: 'DREN'},
    {field: 'localite', header: 'Localite'},
    {field: 'moughataa', header: 'Moughataa'},
    {field: 'ecole', header: 'Ecole'},
    { field: 'notepedagogique', header: 'Note Pedagogique' },
    {field: 'dateEffet', header: 'Date Effet'}
  ];

  // Nature de l'affectation
  nature = [
    'Convenance Personnelle',
    'Necessite de Service',
    'Nominative',
    'Permutation'
  ];

  ngOnInit(): void {
    this.getAffectationByIdAgent();
  }

  //Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showDialog = true;
  }

  showEdit(mobilite:Mobilite){
    this.showDialog = true;
    this.action = 'Edit';
    this.selectedAffection = mobilite;
    this.affectionForm.patchValue(this.selectedAffection);
  }

  save(){
    const data = this.getFormData();
    data.personnel = this.personnel;
    if(this.action === 'Add'){
      this.addAffection(data);
    }
    else{
      this.updateAffection(data);
    }
  }

  private addAffection(mobilite: Mobilite) {
    this.mobiliteService.addMobilite(mobilite).subscribe(() => {
      this.getAllAffections();
      this.showDialog = false;
      this.affectionForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Affectation du personnel ajouter', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Affectation du personnel non ajouter', life: 3000});
    });
  }

  getFormData(): Mobilite {
    const formData = this.affectionForm.value;
    return<Mobilite>{
      localite: formData.localite,
      serviceEcole: formData.serviceEcole,
      dateEffet: formData.dateEffet,
      dren: formData.dren,
      notePedagogiq: formData.notePedagogiq,
      moughataa: formData.moughataa,
      nature: formData.nature

    }

  }


  private getAllAffections() {
    this.mobiliteService.getAllMobilites().subscribe((response:Mobilite[]) => {
      this.listAffections$ = response;
    });
  }

  private getAffectationByIdAgent() {
    this.mobiliteService.findMobiliteByAgent(this.personnel.idAgent).subscribe((response) => {
      this.listAffections$ = response;
    });
  }

  private updateAffection(data: Mobilite) {
    data.idAffectation = this.selectedAffection.idAffectation;
    this.mobiliteService.updateMobilite(data).subscribe(() => {
      this.getAllAffections();
      this.showDialog = false;
      this.affectionForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Affectation du personnel Modifier', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Affectation du personnel non Modifier', life: 3000});
    });
  }

  // Methode pour fermer la vue du formulaire
  cancel() {
    this.selectedAffection = {} as Mobilite;
    this.showDialog = false;
    this.affectionForm.reset();
  }
}
