import {Component, inject, Input, OnInit} from '@angular/core';
import { Fonction,
  fonctionColonneTable,
  Fonctions
} from "../../core/data/avancement/fonction.model";
import {AvancementService} from "../../core/data/avancement/avancement.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {AsyncPipe, DatePipe, KeyValuePipe, UpperCasePipe} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {ConfirmationService, MessageService} from "primeng/api";
import {Personnel} from "../../core/data/personals/personnel.model";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {FonctionListService} from "../../core/data/fonction-list/fonction-list.service";
import {FonctionLists} from "../../core/data/fonction-list/fonctionList";

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
    ToastModule,
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './fonction.component.html',
  styleUrl: './fonction.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class FonctionComponent implements OnInit{

  //liste des dossiers
  listeFonctionByAgent!: Fonctions;

  //service avancement
  avancementService = inject(AvancementService);

  //personnel requis pour la fonction
  @Input({ required: true }) personnel!: Personnel;

  //formulaire fonction
  fonctionAgentForm!: FormGroup;

  //formBuilder
  fb = inject(FormBuilder);

  //action pour les methodes
  action = 'Add'

  //fonction selectionner
  selectFonction :Fonction = {} as Fonction;

  //service message
  messageService = inject(MessageService);

  fonctionListService = inject(FonctionListService);

  // colonne du tableau
  cols = fonctionColonneTable;

  // categorie de la fonction
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

  listFonctions: FonctionLists = [] as FonctionLists;



  ngOnInit(): void {
    // Initialisation du formulaire
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
    this.getFonctions();
  }

  // Recuperer la liste des avancements du personnel selectionner
  private getAvancements() {
    this.avancementService.findAvancementByAgent(this.personnel.idAgent).subscribe((response) => {
      this.listeFonctionByAgent = response;
    });
  }

  // Methode pour recuperrer la liste des fonctions
  private getFonctions() {
    this.fonctionListService.getAllFonctions().subscribe((response) => {
      this.listFonctions = response;
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
      echelle: formData.echelle,
      echelon: formData.echelon,
      dateDebFonction: formData.dateDebFonction,
      categorie: formData.categorie,
      indixe: formData.indixe
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

  // Methode pour supprimer un avancement
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
