import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {Personnel, personnelColonneTable, Personnels} from "../../core/data/personals/personnel.model";
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CardModule} from "primeng/card";
import {Table, TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe, UpperCasePipe} from "@angular/common";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";
import {RouterLink} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";

@Component({
  selector: 'mrt-personnel',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    InputTextModule,
    UpperCasePipe,
    DatePipe,
    TagModule,
    ButtonModule,
    TooltipModule,
    RippleModule,
    RouterLink,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ReactiveFormsModule,
    FormValidatorsComponent,
    CalendarModule,
    DividerModule,
    FileUploadModule,
    DropdownModule
  ],
  templateUrl: './personnel.component.html',
  providers: [MessageService]
})
export class PersonnelComponent implements OnInit{

  @ViewChild('filter') filter!: ElementRef;
// colonne du tableau
  cols= personnelColonneTable
//personnel selection pour un traitement
  selectedPersonnel: Personnel = {} as Personnel;
//variable pour recuperer la liste de tous les personnels
  listPersonnel$!: Personnels;
  //service pour la gestion du personnel
  personalService = inject(PersonnelService)
  messageService = inject(MessageService)
  detailsVisibility = false
  formDialog = false
  action = 'Add';
  personnelForm!: FormGroup;
  fb = inject(FormBuilder);
  loading: boolean = true;

  ngOnInit(): void {
    this.personnelForm = this.fb.group({
      matricule: this.fb.control('',[ Validators.required]),
      nni: this.fb.control('', [Validators.required]),
      nomPrenom: this.fb.control('',[ Validators.required]),
      nomPrenomArab: this.fb.control('',[Validators.required]),

      actifOrNot: this.fb.control(''),
      dteRecrutement: this.fb.control('',[Validators.required]),
      dteTitularisation: this.fb.control(''),
      dteDepart: this.fb.control(''),

      statusEmp: this.fb.control(''),
      adressEmp: this.fb.control(''),
      debutCntrat: this.fb.control(''),
      tlphone: this.fb.control('',[Validators.required]),

      finCntrat: this.fb.control(''),
      dteNaiss: this.fb.control('',[Validators.required]),
      lieuNaiss: this.fb.control('',[Validators.required]),
      bank: this.fb.control('',[Validators.required]),

      codeBank: this.fb.control('',[Validators.required]),
      numroCpte: this.fb.control('',[Validators.required]),
      cleRib: this.fb.control('',[Validators.required]),
      detacher: this.fb.control('',[Validators.required]),

      ministerOrigine: this.fb.control(''),
      typeeducation: this.fb.control(''),
      dteSortie: this.fb.control(''),
    });
    this.getAllPersonnel();
  }

  // Methode pour recuperer la liste du personnel
  getAllPersonnel() {
    this.personalService.getAllPersonnels().subscribe((response) => {
      this.listPersonnel$ = response;
      console.log(this.listPersonnel$);
      this.loading = false;
    });
  }

  //Methode pour afficher le formulaire d'ajout
  openNew() {
    this.formDialog = true;
    this.action = 'Add';
  }

  //Methode pour afficher le formulaire de modification avec les donnees de l'agent selectionner deja rempli
  viewEditPersonnel(personal: any) {
    this.formDialog = true;
    this.action = 'Update';
    this.selectedPersonnel = personal;
    this.personnelForm.patchValue(personal);
  }

  savePersonnel() {
    const data = this.getFormData();
    if (this.action === 'Add') {
      this.createPersonnel(data);
    } else {
      this.updatePersonnel(data);
    }
  }

  // Methode pour creer un personnel
  createPersonnel(personnel:Personnel){
    this.personalService.createPersonnel(personnel).subscribe(() => {
        this.getAllPersonnel();
        this.formDialog = false;
        this.personnelForm.reset();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel ajouter', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non ajouter', life: 3000});

      });
  }

  // Methode pour mettre a jour un personnel
  updatePersonnel(personnel:Personnel){
    personnel.idAgent = this.selectedPersonnel.idAgent;
    console.log(personnel);
    this.personalService.updatePersonnel(personnel).subscribe(() => {
      this.getAllPersonnel();
      this.formDialog = false;
      this.personnelForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel Modifier', life: 3000});
    },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non Modifier', life: 3000});

      });
  }

  // Methode de recuperation des elements du formulaire
  getFormData(): Personnel {
    const formData = this.personnelForm.value;
    return<Personnel>{
      matricule: formData.matricule,
      nni: formData.nni,
      nomPrenom: formData.nomPrenom,
      nomPrenomArab: formData.nomPrenomArab,
      dateNaiss: formData.dteNaiss,
      tlphone: formData.tlphone,
      adressEmp: formData.adressEmp,
      lieuNaiss: formData.lieuNaiss,
      dteRecrutement: formData.dteRecrutement,
      dteTitularisation: formData.dteTitularisation,
      debutCntrat: formData.debutCntrat,
      finCntrat: formData.finCntrat,
      bank: formData.bank,
      codeBank: formData.codeBank,
      numroCpte: formData.numroCpte,
      cleRib: formData.cleRib,
      detacher: formData.detacher,
      ministerOrigine: formData.ministerOrigine,
      typeeducation: formData.typeeducation,
      statusEmp: formData.statusEmp,
      actifOrNot: formData.actifOrNot,
      dteSortie: formData.dteDepart
    }
  }


  // Fonction qui retourne le style css du status de l'employer
  getStatusSeverity(status: string): any {
    if (status) {
      return 'success'
    }
    return 'danger'
  }

  // Methode qui permet de vider la selection et les formulaires apres la fermeture de la vue
  close() {
    this.detailsVisibility = false
    this.selectedPersonnel = {} as Personnel
    // a completer par le formGroup
  }

  // Methode pour fermer la vue du formulaire
  cancel() {
    this.selectedPersonnel = {} as Personnel;
    this.formDialog = false;
    this.personnelForm.reset();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

//   Delete Method
  deletePersonnel(personnel: Personnel) {
    this.personalService.deletePersonnel(personnel).subscribe(() => {
      this.getAllPersonnel();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel supprimer', life: 3000});
    },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel non supprimer', life: 3000});

      });
  }

}
