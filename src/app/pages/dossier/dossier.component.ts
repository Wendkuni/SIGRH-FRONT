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

  showDialog = false;
  lisDossiers$!: Dossiers; //liste des dossiers
  dossierService = inject(DossierService);
  fb = inject(FormBuilder);
  messageService = inject(MessageService);
  @Input({ required: true }) personnel!: Personnel;
  action = 'Add';
  selectedDossier: Dossier = {} as Dossier;
  personnelService = inject(PersonnelService);
  imageFold!: File[];
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

  ngOnInit(): void {
    this.getAllDossiers();
  }

  showForm() {
    this.showDialog = true;
  }

  showEditFormDialog(dossier:Dossier){
    this.showDialog = true;
    this.action = 'Edit'
    this.selectedDossier= dossier;
  }

  saveDossier(){
    const data = this.getData();
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
    this.dossierService.getAllDossiers().subscribe((response:Dossier[]) => {
      return this.lisDossiers$ = response;
    });
  }

  private createDossier(dossier: Dossier) {
    this.dossierService.addDossier(dossier).subscribe(() =>{
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
    dossier.personnel = this.personnel;
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

  onUpload(event: FileUploadEvent) {
    this.imageFold = event.files;
   this.imageFold.forEach( i => {
      console.log(i.name)
    });
  }

}
