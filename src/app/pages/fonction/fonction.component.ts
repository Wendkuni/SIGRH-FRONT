import {Component, inject, Input, OnInit} from '@angular/core';
import { Fonction,
  fonctionColonneTable,
  Fonctions
} from "../../core/data/avancement/fonction.model";
import {AvancementService} from "../../core/data/avancement/avancement.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {KeyValuePipe, UpperCasePipe} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";
import {Personnel} from "../../core/data/personals/personnel.model";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";

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
    RippleModule,
    KeyValuePipe,
    ConfirmDialogModule,
    ToastModule
  ],
  templateUrl: './fonction.component.html',
  styleUrl: './fonction.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class FonctionComponent implements OnInit{

  listeFonctionByAgent!: Fonctions; //liste des dossiers
  avancementService = inject(AvancementService);
  @Input() personnel: Personnel = {} as Personnel;
  fonctionAgentForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(ActivatedRoute);
  fonctionService = inject(AvancementService);
  action = 'Add';
  selectFonction :Fonction = {} as Fonction;
  messageService = inject(MessageService);
  // colonne du tableau
  cols = fonctionColonneTable;
  // Nature de la fonction
  categorie = [
    'Integration' ,
    'Titularisation' ,
    'Nominative' ,
    'Avancement',
    'Bonification' ,
    'Reclassement' ,
    'Sanction' ,
    'Decoration' ,
    'Demission' ,
    'Retraite' ,
    'Deces'
  ];


  ngOnInit(): void {
    this.fonctionAgentForm = this.fb.group({
      libelleFonction: this.fb.control('',[Validators.required]),
      corps: this.fb.control('',[Validators.required]),
      grade: this.fb.control('',[Validators.required]),
      echelle: this.fb.control('', [Validators.required]),
      echelon: this.fb.control('', [Validators.required]),
      dateDebFonction: this.fb.control('',[Validators.required]),
      categorie: this.fb.control('', [Validators.required]),
      groupe: this.fb.control('', [Validators.required]),
      corpsArab: this.fb.control('', [Validators.required]),
      libelleFonctionArab: this.fb.control('', [Validators.required]),
      indice: this.fb.control('', [Validators.required])
    })
    this.getAvancements();
  }

  // Recuperer la liste des avancements du personnel selectionner
  private getAvancements() {
    this.avancementService.findAvancementByAgent(this.personnel.idAgent).subscribe((response) => {
      this.listeFonctionByAgent = response;
    });
  }

  // Rempli le formulaire pour modification
  patchForm(fonction: Fonction) {
    this.action = 'Edit';
    this.fonctionAgentForm.patchValue(fonction);
    this.selectFonction = fonction;
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
    this.selectFonction = {} as Fonction;
    this.fonctionAgentForm.reset();
    this.action = 'Add';
  }

  // Methode pour ajouter un avancement
  private addAvancement(fonction:Fonction) {
    this.avancementService.createAvancement(fonction).subscribe(next=>{
      this.getAvancements();
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement ajouter', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non ajouter', life: 3000});
    });
  }

  // Recuperation des elements du formulaire
  private getFormData() {
    const formData = this.fonctionAgentForm.value;
    return<Fonction>{
      libelleFonction: formData.libelleFonction,
      corps: formData.corps,
      grade: formData.grade,
      echelle: formData.echelle,
      echelon: formData.echelon,
      dateDebFonction: formData.dateEffet,
      categorie: formData.categorie,
      groupe: formData.groupe,
      corpsArab: formData.corpsArab,
      libelleFonctionArab: formData.libelleFonctionArab,
      indice: formData.indice
    }
  }

  // Methode pour modifier un avancement
  private updateAvancement(fonction: Fonction) {
    this.avancementService.updateAvancement(fonction).subscribe(next=>{
      this.getAvancements();
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement modifier', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non modifier', life: 3000});
    })
  }

  private deleteAvancement(id: number){
    this.avancementService.delateAvancement(id).subscribe(() => {
        this.getAvancements();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel supprimer', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non supprimer', life: 3000});

      });
  }
}
