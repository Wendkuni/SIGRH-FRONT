import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {personnelColonneTable, PersonnelRequest, PersonnelResponse} from "../../core/data/personals/personnel.model";
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
    FileUploadModule
  ],
  templateUrl: './personnel.component.html',
  providers: [MessageService]
})
export class PersonnelComponent implements OnInit{

  @ViewChild('filter') filter!: ElementRef;
// colonne du tableau
  cols= personnelColonneTable
//personnel selectionner pour un traitement
  selectedPersonnel: PersonnelResponse = {} as PersonnelResponse
//variable pour recuperer la liste de tous les personnels
  listPersonnel$!: PersonnelResponse[];
  //service pour la gestion du personnel
  personalService = inject(PersonnelService)
  messageService = inject(MessageService)
  detailsVisibility = false
  formDialog = false
  action = 'Add';
  minDate!: Date
  maxDate!: Date
  personnelForm!: FormGroup;
  fb = inject(FormBuilder);
  loading: boolean = true;

  ngOnInit(): void {
    this.personnelForm = this.fb.group({
      matricule: this.fb.control('',[ Validators.required]),
      photo: this.fb.control('',[Validators.required]),
      nni: this.fb.control('', [Validators.required]),
      nometprenom: this.fb.control('',[ Validators.required]),
      nometprenomarab: this.fb.control('',[Validators.required]),
      actifornot: this.fb.control('',[Validators.required]),
      dterecrutemnt: this.fb.control('',[Validators.required]),
      dtetitularisation: this.fb.control('',[Validators.required]),
      dtedepart: this.fb.control('',[Validators.required]),
      statusemp: this.fb.control('',[Validators.required]),
      adressemp: this.fb.control('',[Validators.required]),
      debutcntrat: this.fb.control('',[Validators.required]),
      tlphone: this.fb.control('',[Validators.required]),
      fincntrat: this.fb.control('',[Validators.required]),
      dtenaiss: this.fb.control('',[Validators.required]),
      lieunaiss: this.fb.control('',[Validators.required]),
      bank: this.fb.control('',[Validators.required]),
      codbank: this.fb.control('',[Validators.required]),
      numrocpte: this.fb.control('',[Validators.required]),
      clerib: this.fb.control('',[Validators.required]),
      detacher: this.fb.control('',[Validators.required]),
      ministereorigine: this.fb.control('',[Validators.required]),
      Typeeducation: this.fb.control('',[Validators.required])
    });
    this.getAllPersonnel();
  }

  // Methode pour recuperer la liste du personnel
  getAllPersonnel() {
    this.personalService.getAllPersonnels().subscribe((response) => {
      this.listPersonnel$ = response;
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
  createPersonnel(personnel:PersonnelRequest){
    this.personalService.addPersonnel(personnel).subscribe(() => {
        this.getAllPersonnel();
        this.formDialog = false;
        this.personnelForm.reset();
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel Created', life: 3000});
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Personnel not Created', life: 3000});

      });
  }

  // Methode pour mettre a jour un personnel
  updatePersonnel(personnel:PersonnelRequest){
    let id = this.selectedPersonnel.id;
    this.personalService.updatePersonnel(id, personnel).subscribe(() => {
      this.getAllPersonnel();
      this.formDialog = false;
      this.personnelForm.reset();
      this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Personnel Updated', life: 3000});
    });
  }

  // Methode de recuperation des elements du formulaire
  getFormData(): PersonnelRequest {
    const formData = this.personnelForm.value;
    return<PersonnelRequest>{
      matricule: formData.matricule,
      photo: formData.photo,
      nni: formData.nni,
      nomPrenom: formData.nometprenom,
      nomPrenomArab: formData.nometprenomarab,
      actifOrNot: formData.actifornot,
      dteRecrutemnt: formData.dterecrutemnt,
      dteTitularisation: formData.dtetitularisation,
      dteDepart: formData.dtedepart,
      statusEmp: formData.statusemp,
      adressEmp: formData.adressemp,
      debutCntrat: formData.debutcntrat,
      tlphone: formData.tlphone,
      finCntrat: formData.fincntrat,
      dteNaiss: formData.dtenaiss,
      lieuNaiss: formData.lieunaiss,
      bank: formData.bank,
      codBank: formData.codbank,
      numroCpte: formData.numrocpte,
      cleRib: formData.clerib,
      detacher: formData.detacher,
      ministereOrigine: formData.ministereorigine,
      typeEducation: formData.Typeeducation
    }
  }


  // Fonction  qui retourne le style css du status de l'employer
  getStatusSeverity(status: string): any {
    if (status) {
      return 'success'
    }
    return 'danger'
  }

  // Methode qui permet de vider la selection et les formulaires apres la fermeture de la vue
  close() {
    this.detailsVisibility = false
    this.selectedPersonnel = {} as PersonnelResponse
    // a completer par le formGroup
  }

  // Methode pour fermer la vue du formulaire
  cancel() {
    this.selectedPersonnel = {} as PersonnelResponse;
    this.formDialog = false;
    this.personnelForm.reset();
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

}
