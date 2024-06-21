import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  AbsenceEtConge,
  AbsenceEtCongeList,
  DemandeConge,
  DemandeRaison
} from "../../core/data/conge/conge_absence.model";
import {CongeService} from "../../core/data/conge/conge.service";
import {Table, TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {TagModule} from "primeng/tag";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";
import {CdkScrollable} from "@angular/cdk/overlay";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {MessageService} from "primeng/api";
import {RouterLink} from "@angular/router";
import {PersonnelService} from "../../core/data/personals/personnel.service";
import {Personnels} from "../../core/data/personals/personnel.model";

@Component({
  selector: 'mrt-conge-absence',
  standalone: true,
  imports: [
    ToastModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    TableModule,
    InputTextModule,
    DatePipe,
    TagModule,
    TooltipModule,
    DialogModule,
    CdkScrollable,
    FormValidatorsComponent,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './conge-absence.component.html',
  providers: [MessageService]
})
export class CongeAbsenceComponent implements OnInit {

  protected readonly DemandeRaison: any = DemandeRaison;
  // colonne du tableau
  colNT: Cols[] = [
    {field: 'matricule', header: 'Matricule'},
    {field: 'nomPrenom', header: 'Nom et prénom'},
    {field: 'raison', header: 'Type'},
    {field: 'dateEffet', header: 'Date Effet'},
    {field: 'nbJour', header: 'Nombre de jours'},
    {field: 'autorisation', header: 'Autorisation'},
    {field: 'motif', header: 'Motif'},
    {field: 'signataire', header: 'Signataire'}
  ];
  showFormDialog = false;
  showFormActionDialog = false;
  formDemande!: FormGroup;
  formDemandeProcessing!: FormGroup;
  fb = inject(FormBuilder);
  action = 'Add';
  selectedDemande: AbsenceEtConge = {} as AbsenceEtConge;
  raison = [
    'Absence',
    'Congé',
    'Congé Viduite',
    'Congé de maladie',
    'Congé de maternité',
    'Congé de pelerinage',
    'Disponibilite',
    'Detachement'
  ];
  autorisation = [
    'Demande acceptée',
    'Demande refusée',
    'Demande annulée'
  ];
  //variable pour recuperer la liste de tous les personnels
  listDemande$!: AbsenceEtCongeList;
  congeService = inject(CongeService);
  messageService = inject(MessageService);
  personnalService = inject(PersonnelService);
  listeAgent: Personnels = [];


  ngOnInit(): void {
    this.formDemande = this.fb.group({
      matricule: this.fb.control('', [Validators.required]),
      libelleAb: this.fb.control(''),
      raison: this.fb.control('',[Validators.required]),
      dateEffet: this.fb.control('', [Validators.required]),
      nbJour: this.fb.control('', [Validators.required]),
      motif: this.fb.control('')
    });

    this.formDemandeProcessing = this.fb.group({
      autorisation: this.fb.control('', [Validators.required]),
      signataire: this.fb.control('', [Validators.required]),
    });

    this.getAllDemandeConge();
    this.getAllPersonnel();
  }

  showForm() {
    this.showFormDialog = true;
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getAllPersonnel() {
    this.personnalService.getAllPersonnels().subscribe((response) => {
      this.listeAgent = response;
    });
  }

  getAllDemandeConge() {
    this.congeService.getAll().subscribe((response) => {
      this.listDemande$ = response;
    });
  }

// Fonction  qui retourne le style css du status de l'employer
  getStatusSeverity(autorisation: any): any {
    if (autorisation === "Demande acceptée") {
      return 'success'
    } else if (autorisation === "Demande en cours") {
      return 'info'
    }
    return 'danger'
  }

  editDemande(dmd: AbsenceEtConge) {
    this.action = 'Edit';
    this.showFormDialog = true;
    this.selectedDemande = dmd;
    this.formDemande.patchValue(this.selectedDemande);
  }

  acceptDemande(dmd: AbsenceEtConge) {
    this.showFormActionDialog = true;
    this.selectedDemande = dmd;
    this.action = 'Accetp';
  }

  rejectDemande(dmd: AbsenceEtConge) {
    this.showFormActionDialog = true;
    this.action = 'Refuse';
    this.selectedDemande = dmd;
  }

  cancelDemande(dmd: AbsenceEtConge) {
    this.showFormActionDialog = true;
    this.action = 'Cancel';
    this.selectedDemande = dmd;
  }

  // Methode pour le formulaire
  onSubmit() {
    const data = this.getFromData();
    const dataProcessing = this.getProcessingFormData();
    switch (this.action) {
      case 'Add':
        this.createDemande(data);
        break;
      case 'Edit':
        this.updateDemande(data);
        break;
      // default:
      //   this.processingDemande(dataProcessing);
      //   break;
    }
  }

  createDemande(dmd: AbsenceEtConge) {
    this.congeService.add(dmd).subscribe(next => {
        this.getAllDemandeConge();
        this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Demande ajoutée avec succès'});
        this.showFormDialog = false;
        this.formDemande.reset();
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Erreur lors de l\'ajout de la demande'
        });
      });
  }

  updateDemande(demandeConge: AbsenceEtConge) {
    this.congeService.update(demandeConge).subscribe(() => {
      this.getAllDemandeConge();
      this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Demande modifiée avec succès'});
      this.showFormDialog = false;
      this.formDemande.reset();
    });
  }

  // Recuperer les elements du formulaire
  private getFromData(): AbsenceEtConge {
    const formData = this.formDemande.value;
    return <AbsenceEtConge>{
      libelleAb: formData.libelleAb,
      dateEffet: formData.dateEffet,
      nbJour: formData.nombreJr,
      autorisation: 'Demande en cours',
      motif: formData.motif,
    }
  }

  private getProcessingFormData(): AbsenceEtConge {
    const formData = this.formDemandeProcessing.value;
    return <AbsenceEtConge>{
      autorisation: formData.autorisation,
      signataire: formData.signataire
    }
  }

  cancel() {
    this.showFormDialog = false;
    this.showFormActionDialog = false;
    this.formDemande.reset();
    this.action = 'Add';
    this.selectedDemande = {} as AbsenceEtConge;
  }

  processingDemande(demandeConge: AbsenceEtConge) {
    // this.congeService.updateDemande(this.selectedDemande.id, demandeConge).subscribe(() => {
    //     this.getAllDemandeConge();
    //     this.messageService.add({severity: 'success', summary: 'Succès', detail: 'Demande taiter avec succès'});
    //     this.showFormActionDialog = false;
    //     this.formDemandeProcessing.reset();
    //   },
    //   error => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Erreur',
    //       detail: 'Erreur lors du traitement de la demande'
    //     });
    //   }
    // )
  };


}
