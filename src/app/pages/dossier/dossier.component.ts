import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DatePipe} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {DossierService} from "../../core/data/dossier/dossier.service";
import {Dossier, Dossiers} from "../../core/data/dossier/dossier.model";
import {Personnel, personnelColonneTable} from "../../core/data/personals/personnel.model";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Courier} from "../../core/data/couriel/couriel.model";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {PersonnelService} from "../../core/data/personals/personnel.service";

@Component({
  selector: 'mrt-dossier',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    TableModule,
    DatePipe,
    DialogModule,
    InputTextModule,
    FileUploadModule,
    ReactiveFormsModule,
    FormValidatorsComponent,
    CalendarModule
  ],
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ MessageService]
})
export class DossierComponent implements OnInit{

  //visibilite dialog
  showDialog = false;

  //liste des dossiers
  lisDossiers$!: Dossiers;

  //service dossier
  dossierService = inject(DossierService);

  //formBuilder
  fb = inject(FormBuilder);

  //service message
  messageService = inject(MessageService);

  // personnel requis pour le dossier
  @Input({ required: true }) personnel!: Personnel;

  //action pour les methodes
  action = 'Add';

  //dossier selectionner
  selectedDossier: Dossier = {} as Dossier;

  //service personnel
  personnelService = inject(PersonnelService);

  // fichier dossier
  imageFold!: any;

  //form groupe
  dossierForm: FormGroup = this.fb.group({
    libelDossier: this.fb.control('',[Validators.required]),
    dateUpload:this.fb.control('',[Validators.required]),
    observation: this.fb.control('',[Validators.required]),
  });

// colonne du tableau
  cols: Cols[] = [
    { field: 'nom', header: 'Nom Dossier' },
    { field: 'date', header: 'Date' },
    { field: 'observation', header: 'Observation' },
    { field: 'images', header: 'Images' }
  ]

  // lancer au demarrage
  ngOnInit(): void {
    this.getAllDossiers();
  }
  // Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showDialog = true;
  }

  // Methode pour afficher le formulaire d'edition
  showEditFormDialog(dossier:Dossier){
    this.showDialog = true;
    this.action = 'Edit'
    this.selectedDossier= dossier;
  }

  saveDossier(){
    const data = this.getData();
    data.idAgent = this.personnel.idAgent;
    if(this.action === 'Add'){
      this.createDossier(data);
    }
    else{
      this.updateDossier(data);
    }
  }

  getData():Dossier {
    const formData = this.dossierForm.value;
    return<Dossier>{
      libelDossier: formData.libelDossier,
      dateUpload: formData.dateUpload,
      observation: formData.observation
    }
  }

  private getAllDossiers() {
    this.dossierService.findDossierByAgent(this.personnel.idAgent).subscribe((response:Dossier[]) => {
      return this.lisDossiers$ = response;
    });
  }

  private createDossier(dossier: Dossier) {
    dossier.idDossierScan = this.personnel.idAgent + 1;
    this.dossierService.addDossier(this.imageFold,dossier).subscribe(() =>{
      this.getAllDossiers();
      this.showDialog = false;
      this.dossierForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel ajouter', life: 3000});
    },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non ajouter', life: 3000});

      });
  }

  updateDossier(dossier: Dossier){
    dossier.idDossierScan = this.selectedDossier.idDossierScan;
    dossier.idAgent = this.personnel.idAgent;
    this.dossierService.updateDossier(dossier).subscribe(() => {
        this.getAllDossiers();
        this.showDialog = false;
        this.dossierForm.reset();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel Modifier', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non Modifier', life: 3000});

      });
  }

  onSelectedFiles(event:any) {
    this.imageFold = event.currentFiles[0];
  }

}
