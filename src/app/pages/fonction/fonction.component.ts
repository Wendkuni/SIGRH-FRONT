import {Component, inject, Input, OnInit} from '@angular/core';
import {Avancement} from "../../core/data/avancement/fonction.model";
import {AvancementService} from "../../core/data/avancement/avancement.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Cols} from "../../core/data/primeng/primeng.model";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {UpperCasePipe} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {Personnel} from "../../core/data/personals/personnel.model";

@Component({
  selector: 'mrt-fonction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FormValidatorsComponent,
    CalendarModule,
    TableModule,
    UpperCasePipe,
    TooltipModule,
    RippleModule
  ],
  templateUrl: './fonction.component.html',
  styleUrl: './fonction.component.scss',
  providers: [MessageService]
})
export class FonctionComponent implements OnInit{

  listAvancement$!: Avancement[]; //liste des dossiers
  avancementService = inject(AvancementService);
  @Input() personnel!: Personnel;
  fonctionAgentForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(ActivatedRoute);
  fonctionService = inject(AvancementService);
  selectedAvancement!: Avancement;
  action = 'Add';
  selectAvancement :Avancement = {} as Avancement;
  messageService = inject(MessageService);
  // colonne du tableau
  cols: Cols[] = [
    { field: 'fonction', header: 'Fonction' },
    { field: 'dateEffet', header: 'Date Effect' },
    { field: 'corps', header: 'Corps' },
    { field: 'grade', header: 'Grade' },
    { field: 'echelle', header: "Echelle"},
    { field: 'echellon', header: "Echellon"},
    { field: 'indice', header: "Indice"}
  ];
  // Nature de la fonction
  nature = [
    'Integration',
    'Titularisation',
    'Nominative',
    'Avancement',
    'Bonification',
    'Reclassement',
    'Sanction',
    'Decoration',
    'Demission',
    'Retraite',
    'Deces'
  ];


  ngOnInit(): void {
    this.fonctionAgentForm = this.fb.group({
      nature: this.fb.control('',[Validators.required]),
      corps: this.fb.control('',[Validators.required]),
      fonction: this.fb.control('',[Validators.required]),
      grade: this.fb.control('',[Validators.required]),
      echelle: this.fb.control('', [Validators.required]),
      echellon: this.fb.control('', [Validators.required]),
      dateEffet: this.fb.control('',[Validators.required])
    })
    this.getAvancements();
  }

  // Recuperer la liste des avancements du personnel selectionner
  private getAvancements() {
    this.avancementService.getAllAvancements().subscribe((response) => {
      this.listAvancement$ = response;
    });
  }

  // Rempli le formulaire pour modification
  patchForm(selectedAvancement: Avancement) {
    this.action = 'Edit';
    this.fonctionAgentForm.patchValue(selectedAvancement);
    this.selectedAvancement = selectedAvancement;
  }

  // Methode d'enregistrement d'un avancement dans la base de donnee qui choisi entre l'ajout et la modification
  saveFonctionAgent() {
    const data = this.getFormData();
    if(this.action === 'Add') {
      this.addAvancement(data);
    }
    else {
      this.updateAvancement(data);
    }
  }

  // Methode pour annuler une methode
  cancel() {
    this.selectedAvancement = {} as Avancement;
    this.fonctionAgentForm.reset();
    this.action = 'Add';
  }

  // Methode pour ajouter un avancement
  private addAvancement(avancement:Avancement) {
    this.avancementService.addAvancement(avancement).subscribe(next=>{
      this.getAvancements();
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement ajouter', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non ajouter', life: 3000});
    });
  }

  // Recuperation des elements du formulaire
  private getFormData():Avancement {
    const formData = this.fonctionAgentForm.value;
    return<Avancement>{
      nature: formData.nature,
      corps: formData.corps,
      fonction: formData.fonction,
      grade: formData.grade,
      echelle: formData.echelle,
      echellon: formData.echellon,
      dateEffet: formData.dateEffet
    }
  }

  // Methode pour modifier un avancement
  private updateAvancement(avancement: Avancement) {
    this.avancementService.updateAvancement(avancement.id, avancement).subscribe(next=>{
      this.getAvancements();
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement modifier', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non modifier', life: 3000});
    })
  }
}
