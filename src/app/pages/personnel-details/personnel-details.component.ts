import {Component, inject, Input, OnInit} from '@angular/core';
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {ActivatedRoute} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TabViewModule} from "primeng/tabview";
import {FonctionComponent} from "../fonction/fonction.component";
import {DossierComponent} from "../dossier/dossier.component";
import {AffectationComponent} from "../affectation/affectation.component";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {Personnel} from "../../core/data/personals/personnel.model";
import {Fonction, fonctionColonneTable, Fonctions} from "../../core/data/avancement/fonction.model";
import {AvancementService} from "../../core/data/avancement/avancement.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {FonctionListService} from "../../core/data/fonction-list/fonction-list.service";
import {FonctionLists} from "../../core/data/fonction-list/fonctionList";
import {CalendarModule} from "primeng/calendar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DatePipe} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";
import {Dossier, Dossiers} from "../../core/data/dossier/dossier.model";
import {DossierService} from "../../core/data/dossier/dossier.service";
import {Cols} from "../../core/data/primeng/primeng.model";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {DialogModule} from "primeng/dialog";
import {Mobilite} from "../../core/data/affectation/mobilite.model";
import {AffectationService} from "../../core/data/affectation/affectation.service";

@Component({
  selector: 'mrt-personnel-details',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
    FonctionComponent,
    DossierComponent,
    AffectationComponent,
    ToastModule,
    CalendarModule,
    ConfirmDialogModule,
    DatePipe,
    DropdownModule,
    FormValidatorsComponent,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    TableModule,
    TooltipModule,
    DialogModule,
    FileUploadModule
  ],
  templateUrl: './personnel-details.component.html',
  providers: [MessageService]
})
export class PersonnelDetailsComponent implements OnInit {

  ////////////////////////////////

  personalService = inject(PersonnelService)
  private route = inject(ActivatedRoute);
  personnel: Personnel = {} as Personnel;
  //formBuilder
  fb = inject(FormBuilder);
  messageService = inject(MessageService);
  id = 0;

///////////////////////////////////////



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
      this.getPersonnel(this.id);
      this.getAvancements(this.id);
      this.getAllDossiers(this.id);
      this.getAffectationByIdAgent(this.id);
    });

    // Initialisation du formulaire
    this.fonctionAgentForm = this.fb.group({
      libelleFonction: this.fb.control('', ),
      // corps: this.fb.control('', [Validators.required]),
      grade: this.fb.control('', ),
      echelle: this.fb.control('', ),
      echelon: this.fb.control('', ),
      dateDebFonction: this.fb.control('', ),
      categorie: this.fb.control('', [Validators.required]),
      // groupe: this.fb.control('', [Validators.required]),
      // corpsArab: this.fb.control('', [Validators.required]),
      // libelleFonctionArab: this.fb.control('', [Validators.required]),
      // indixe: this.fb.control('', [Validators.required])
    });


    this.getFonctions();
    this.getLocalite();
    this.getAllLibFonction();
    this.getAllEchelle();
    this.getAllEchelon();
    this.getAllGrade();
    this.getAllDren();
    this.getAllAffectationNature();
  }

  // Methode pour afficher le formulaire d'ajout
  showDossierForm() {
    this.showDossierDialog = true;
  }

  // Methode pour afficher le formulaire d'edition
  showDossierEditFormDialog(dossier: Dossier) {
    this.showDossierDialog = true;
    this.actionDossier = 'Edit'
    this.selectedDossier = dossier;
  }

  getPersonnel(id: number) {
    this.personalService.findPersonnelById(id).subscribe((response) => {
        this.personnel = response;
      }, error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Une erreur est survenue lors de la récupération des données'
        })
      }
    )
  }




  ///////////////////////////// Dossier ///////////////////////

  //visibilite dialog
  showDossierDialog = false;

  //liste des dossiers
  lisDossiers$!: Dossiers;

  //action pour les methodes
  actionDossier = 'Add';

  //dossier selectionner
  selectedDossier: Dossier = {} as Dossier;

  //service dossier
  dossierService = inject(DossierService);

  // fichier dossier
  imageFold!: any;

  //form groupe
  dossierForm: FormGroup = this.fb.group({
    libelDossier: this.fb.control('', [Validators.required]),
    dateUpload: this.fb.control('', [Validators.required]),
    observation: this.fb.control('', [Validators.required]),
  });

// colonne du tableau
  colsDossier: Cols[] = [
    {field: 'nom', header: 'Nom Dossier'},
    {field: 'date', header: 'Date'},
    {field: 'observation', header: 'Observation'},
    {field: 'images', header: 'Images'}
  ]


  saveDossier() {
    const data = this.getDataDossier();
    data.idAgent = this.personnel.idAgent;
    if (this.actionDossier === 'Add') {
      this.createDossier(data);
    } else {
      this.updateDossier(data);
    }
  }

  getDataDossier(): Dossier {
    const formData = this.dossierForm.value;
    return <Dossier>{
      libelDossier: formData.libelDossier,
      dateUpload: formData.dateUpload,
      observation: formData.observation
    }
  }

  private getAllDossiers(id: number) {
    this.dossierService.findDossierByAgent(id).subscribe((response: Dossier[]) => {
      this.lisDossiers$ = response;
    });
  }

  private createDossier(dossier: Dossier) {
    dossier.idDossierScan = Math.floor(Math.random() * 6) + 1;
    this.dossierService.addDossier(this.imageFold, dossier).subscribe(() => {
        this.getAllDossiers(this.id);
        this.showDossierDialog = false;
        this.dossierForm.reset();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Dossier ajouter', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Dossier non ajouter', life: 3000});
      });
  }

  updateDossier(dossier: Dossier) {
    dossier.idDossierScan = this.selectedDossier.idDossierScan;
    this.dossierService.updateDossier(dossier).subscribe(() => {
        this.getAllDossiers(this.id);
        this.showDossierDialog = false;
        this.dossierForm.reset();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel Modifier', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non Modifier', life: 3000});

      });
  }

  onSelectedFiles(event:any) {
    this.imageFold = event.currentFiles[0];
    console.log(this.imageFold);
  }

  cancelDossier(){
    this.selectedDossier = {} as Dossier;
    this.showDossierDialog = false;
    this.dossierForm.reset();
  }




/////////////////////// Avancement ///////////////////////

  listeFonctionByAgent!: Fonctions;

  //service avancement
  avancementService = inject(AvancementService);

  //formulaire fonction
  fonctionAgentForm!: FormGroup;

  //action pour les methodes
  actionAvancement = 'Add'

  //fonction selectionner
  selectFonction: Fonction = {} as Fonction;

  fonctionListService = inject(FonctionListService);

  // colonne du tableau
  colsAvancement = fonctionColonneTable;

  // categorie de la fonction
  categorie = [
    'Intégration',
    'Titularisation',
    'Nomination',
    'Avancement',
    'Bonification',
    'Reclassement',
    'Sanction',
    'Décoration',
    'Demission',
    'Retraite',
    'Deces',
    'Mettre à disposition',
    'Évaluer',
    'Mettre en position de détachement',
    'Mettre en position de stage'
  ];

  listFonctions: FonctionLists = [] as FonctionLists;
  listLibFonction!: any;
  listEchelle!: any;
  listEchellon!:any;
  listGrade!:any;


  // Recuperer la liste des avancements du personnel selectionner
  private getAvancements(id: number) {
    this.avancementService.findAvancementByAgent(id).subscribe((response) => {
      this.listeFonctionByAgent = response;
    });
  }

  // Methode pour recuperrer la liste des fonctions
  private getFonctions() {
    this.fonctionListService.getAllFonctions().subscribe((response) => {
      this.listFonctions = response.result;
    });
  }

  // Rempli le formulaire pour modification
  patchFormAvancement(fonction: Fonction) {
    this.actionAvancement = 'Edit';
    this.fonctionAgentForm.patchValue(fonction);
    this.selectFonction = fonction;
  }

  // Methode d'enregistrement d'un avancement dans la base de donnee qui choisi entre l'ajout et la modification
  saveFonctionAgent() {
    const data = this.getDataAvancement();
    data.personnel = this.personnel;
    if (this.actionAvancement === 'Add') {
      this.addAvancement(data);
    } else {
      this.updateAvancement(data);
    }
  }


  // Methode pour annuler une methode
  cancelAvancement() {
    this.selectFonction = {} as Fonction;
    this.fonctionAgentForm.reset();
    this.actionAvancement = 'Add';
  }

  // Methode pour ajouter un avancement
  private addAvancement(fonction: Fonction) {
    this.avancementService.createAvancement(fonction).subscribe(next => {
      this.getAvancements(this.id);
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement ajouter', life: 3000});
    }, error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non ajouter', life: 3000});
    });
  }

  // Recuperation des elements du formulaire
  private getDataAvancement() {
    const formData = this.fonctionAgentForm.value;
    return <Fonction>{
      libelleFonction: formData.libelleFonction,
      grade: formData.grade,
      echelle: formData.echelle,
      echelon: formData.echelon,
      dateDebFonction: formData.dateDebFonction,
      categorie: formData.categorie
    }
  }

  // Methode pour modifier un avancement
  private updateAvancement(fonction: Fonction) {
    this.avancementService.updateAvancement(fonction).subscribe(next => {
      this.getAvancements(this.id);
      this.fonctionAgentForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Avancement modifier', life: 3000});
    }, error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Avancement non modifier', life: 3000});
    })
  }

  // Methode pour supprimer un avancement
  private deleteAvancement(id: number) {
    this.avancementService.delateAvancement(id).subscribe(() => {
        this.getAvancements(this.id);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel supprimer', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non supprimer', life: 3000});

      });
  }

  private getAllLibFonction(){
    this.avancementService.getLibFonction().subscribe(response => {
      this.listLibFonction = response.result
    })
  }

  private getAllEchelle(){
    this.avancementService.getListEchelle().subscribe(response => {
      this.listEchelle = response.result
    })
  }

  private getAllEchelon(){
    this.avancementService.getListEchelon().subscribe(response => {
      this.listEchellon = response.result
    })
  }

  private getAllGrade(){
    this.avancementService.getListGrade().subscribe(response => {
      this.listGrade = response.result
    })
  }






/////////// Mobilite ////////////

  showMobiliteDialog = false;
  listAffections$!: Mobilite[]; //liste des affections
  mobiliteService = inject(AffectationService);
  actionMobilite = 'Add';
  selectedAffection: Mobilite = {} as Mobilite;
  affectionForm = this.fb.group({
    localite: this.fb.control('',[Validators.required]),
    serviceEcole: this.fb.control('',[Validators.required]),
    dateEffet: this.fb.control('',[Validators.required]),
    nature: this.fb.control('',[Validators.required]),
    dren: this.fb.control('',[Validators.required]),
    notePedagogiq: this.fb.control('',[Validators.required]),
    moughataa: this.fb.control('',[Validators.required])
  });
  colsMobilite: Cols[] = [
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
  listNatureAffectation!:any;
  listDren!:any;
  listLocalite$!: any;
  listMobiliteByAgent!: any;

  //Methode pour afficher le formulaire d'ajout
  showMobiliteForm() {
    this.showMobiliteDialog = true;
    this.actionMobilite = 'Add';
  }

  showEdit(mobilite:Mobilite){
    this.showMobiliteDialog = true;
    this.actionMobilite = 'Edit';
    this.selectedAffection = mobilite;
    this.affectionForm.patchValue(this.selectedAffection);
  }

  save(){
    const data = this.getDataMobilite();
    data.personnel = this.personnel;
    if(this.actionMobilite === 'Add'){
      this.addAffection(data);
    }
    else{
      this.updateAffection(data);
    }
  }

  private addAffection(mobilite: Mobilite) {
    mobilite.idAffectation = Math.floor(Math.random() * 6) + 1;
    console.log(mobilite.idAffectation)
    this.mobiliteService.addMobilite(mobilite).subscribe(() => {
      this.getAllAffections();
      this.showMobiliteDialog = false;
      this.affectionForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Affectation du personnel ajouter', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Affectation du personnel non ajouter', life: 3000});
    });
  }

  private getLocalite(){
    this.mobiliteService.getLocalite().subscribe((response) => {
      this.listLocalite$ = response;
    });
  }

  private getAllDren(){
    this.mobiliteService.getAllDren().subscribe(response => {
      this.listDren = response.result
    })
  }

  getDataMobilite(): Mobilite {
    const formData = this.affectionForm.value;
    return <Mobilite>{
      localite: formData.localite,
      serviceEcole: formData.serviceEcole,
      dateEffet: formData.dateEffet,
      dren: formData.dren,
      notePedagogiq: formData.notePedagogiq,
      nature: formData.nature

    }
  }

  private getAllAffections() {
    this.mobiliteService.getAllMobilites().subscribe((response:Mobilite[]) => {
      this.listAffections$ = response;
    });
  }

  private getAffectationByIdAgent(id:number) {
    this.mobiliteService.findMobiliteByAgent(id).subscribe((response) => {
      this.listMobiliteByAgent = response;
    });
  }

  private updateAffection(data: Mobilite) {
    data.idAffectation = this.selectedAffection.idAffectation;
    this.mobiliteService.updateMobilite(data).subscribe(() => {
      this.getAllAffections();
      this.showMobiliteDialog = false;
      this.affectionForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Affectation du personnel Modifier', life: 3000});
    },error => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Affectation du personnel non Modifier', life: 3000});
    });
  }

 private getAllAffectationNature(){
    this.mobiliteService.getAllAffectationNature().subscribe(response => {
      this.listNatureAffectation = response.result
    })
 }

  // Methode pour fermer la vue du formulaire
  cancelMobilite() {
    this.selectedAffection = {} as Mobilite;
    this.showMobiliteDialog = false;
    this.affectionForm.reset();
  }

}
