import {Component, inject, OnInit} from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {
  DynamicDialogModule
} from 'primeng/dynamicdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StepperModule } from 'primeng/stepper';
import {Table, TableModule} from 'primeng/table';
import { AgentFormDetailsViewComponent } from '../../agent-form-details-view/agent-form-details-view.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {
  Personnel,
  PieceJustificatif,
} from '../../../../core/data/personals/personnel.model';
import { Cols } from '../../../../core/data/primeng/primeng.model';
import {BadgeModule} from "primeng/badge";
import {TooltipModule} from "primeng/tooltip";
import {Permutation, PermutationList} from "../../../../core/data/mobilite/mobilite.model";
import {AffectationService} from "../../../../core/data/affectation/affectation.service";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'mrt-agent-affectation-permutation',
  standalone: true,
  templateUrl: './agent-affectation-permutation.component.html',
  imports: [
    TabViewModule,
    CardModule,
    StepperModule,
    DropdownModule,
    CommonModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    RippleModule,
    TableModule,
    DynamicDialogModule,
    AgentFormDetailsViewComponent,
    BadgeModule,
    TooltipModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  styles: `
  :host ::ng-deep {
    .p-fileupload {
      padding: 0;

      .p-fileupload-buttonbar {
        display: none;
      }

      .p-fileupload-content {
        border: 0 none;
        padding: 0;
      }

      .p-fileupload-row {
        display: none;
      }

      .p-progressbar {
        display: none;
      }
    }
  }`,
  providers: [MessageService, ConfirmationService],
})
export class AgentAffectationPermutationComponent implements OnInit{

  activeIndex: number = 0; // index de l'onglet actif
  action :string = 'Add'; // action
  listeDemande: PermutationList = [];
  listePermutationRecut: PermutationList = [];

  pieceLibelle: string = ''; // libelle de la piece justificative

  image!: any; // image de la piece justificative

  listPieceJustificatifAgent1 = Array<PieceJustificatif>(); // liste des pieces justificatives de l'agent 1

  messageService = inject(MessageService); // service de message

  mobiliteService = inject(AffectationService);

  confirmationService = inject(ConfirmationService); // service de confirmation

  matriculeCopermutant: string = '';

  lieuPermutation: string = '';

  selectedDemande: Permutation = {} as Permutation;

  // agent connecté
  selectedPersonnel: Personnel = JSON.parse(
    localStorage.getItem('user') as string
  );

  // colonne du tableau
  colsDossier: Cols[] = [
    { field: 'libelle', header: 'Libellé de la pièce' },
    { field: 'images', header: 'Images' },
  ];

  // colonne du tableau permutation enregistrer
  colsPermutationSave: Cols[] = [
    { field: 'numDemande', header: 'Numero de la demande' },
    {field: 'lieuPermutation', header:'Lieu Permutation'},
    { field: 'matriculeCopermutant', header: 'Matricule Copermutant' },
    {field: 'dateDemandePermutation', header:'Date demande'},
    {field: 'listPieceJustificatifPermutant', header:'Liste de vos pièces Justificatives'}
  ];

  // Colonne permutation recu
  colsPermutationRecuSave: Cols[] = [
    { field: 'numDemande', header: 'Numero de la demande' },
    {field: 'lieuPermutation', header:'Lieu Permutation'},
    { field: 'matriculeCopermutant', header: 'Matricule Copermutant' },
    {field: 'dateDemandePermutation', header:'Date demande'},
    {field: 'listPieceJustificatifPermutant', header:'Liste de vos pièces Justificatives'}
  ];

  // liste des pieces justificatives
  listeLibellePiece = [
    'Demande manuscrite des copermutants',
    'Copie de la pièce d’identité',
    'Certificat de prise de service',
  ];

  // methode pour upload une image
  onUploadFile(event: any) {
    this.image = event.files[0];
  }

  // methode pour supprimer l'image selectionnée
  removeFile() {
    this.image = null;
  }

  // methode pour ajouter une piece justificative
  ajouterAgent1() {
    if (this.image != null && this.pieceLibelle != '') {
      this.listPieceJustificatifAgent1.push({
        libelle: this.pieceLibelle,
        images: this.image,
      });
      this.pieceLibelle = '';
      this.image = null;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Le libellé et l'image sont obligatoires",
      });
    }
  }

  ngOnInit(): void {
    this.getAllDemandePermutationAgent();
    this.getPermutationRecu();
  }

  // methode pour supprimer une piece justificative
  removePieceAgent1(index: number) {
    this.listPieceJustificatifAgent1.splice(index, 1);
  }

  // Methode pour filtrer les elements du tableau
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  savePermutation() {
    if (this.listPieceJustificatifAgent1.length > 0) {
      this.confirm();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Aucune pièce justificative n'a été ajoutée",
      });
    }
  }

  onEdit(dmd: Permutation) {
    this.activeIndex = 0;
    this.action = 'Edit';
    this.selectedDemande = dmd;
    this.matriculeCopermutant = dmd.matriculeCopermutant;
    this.lieuPermutation = dmd.lieuPermutation;
    this.listPieceJustificatifAgent1 = dmd.listPieceJustificatifPermutant;
  }

  confirm() {
    this.confirmationService.confirm({
      header: 'Êtes-vous sûr ? ',
      message: 'Veuillez confirmer pour continuer.',
      accept: () => {
        if (this.action == 'Add') {
          // this.createPermutation();
          this.createPermutationJson();
        } else {
          if(this.action === 'Edit'){
              // this.updatePermutation();
              this.updatePermutationJson();
          }
        }
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          detail: 'Vous avez annuler',
          life: 3000,
        });
      },
    });
  }

  // Permutation backend
  createPermutation() {

  }

  // Permutation Frontend
  createPermutationJson() {
    const data = this.getFormData();
    data.listPieceJustificatifPermutant = this.listPieceJustificatifAgent1;
    this.mobiliteService.createPermuttionJson(data).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Affectation enregistrée avec succès',
      });
        this.getAllDemandePermutationAgent();
        this.cancelDmdPermutation();
    },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Affectation non enregistrée',
          life: 3000,
        });
      })

  }

  // Methode de modification backend
  updatePermutation() {

  }

  // Methode de modification Json server
  updatePermutationJson() {
    const data = this.getFormData();
    data.listPieceJustificatifPermutant = this.listPieceJustificatifAgent1;
    this.mobiliteService.updatePermuttionJson(data).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Succès',
          detail: 'Affectation enregistrée avec succès',
        });
        this.getAllDemandePermutationAgent();
        this.cancelDmdPermutation();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Affectation non enregistrée',
          life: 3000,
        });
      })
  }

  getFormData(): Permutation{
    return <Permutation>{
      matriculeCopermutant: this.matriculeCopermutant,
      matriculePermutant: this.selectedPersonnel.matricule,
      lieuPermutation: this.lieuPermutation,
      dateDemandePermutation: new Date(),
      enregistrerPermutant: true,
      envoyerPermutant: false,
      enregistreCopermutant: false,
      envoyerCopermutant: false,
      annulerDemandePermutant: false,
      annulerDemandeCopermutant: false
    }
  }

  // List permutation agent connectee
  getAllDemandePermutationAgent() {
    this.mobiliteService.getAllPermutationJson().subscribe((response) => {
        response.forEach((element) => {
          if (element.matriculePermutant === this.selectedPersonnel.matricule && element.enregistrerPermutant && !element.envoyerPermutant) {
            this.listeDemande.push(element);
          }
        });
      });
  }

  // Liste permutation recu
  getPermutationRecu(){
    this.mobiliteService.getAllPermutationJson().subscribe((response) => {
      response.forEach((element) => {
        if(element.matriculeCopermutant === this.selectedPersonnel.matricule && !element.envoyerCopermutant) {
          this.listePermutationRecut.push(element);
        }
      })
    })
  }

  cancelDmdPermutation() {
    this.lieuPermutation = '';
    this.matriculeCopermutant = '';
    this.pieceLibelle = '';
    this.image = null;
    this.listPieceJustificatifAgent1 = [];
  }

}
