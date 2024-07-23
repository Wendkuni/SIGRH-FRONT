import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FieldsetModule} from "primeng/fieldset";
import {DatePipe, NgIf} from "@angular/common";
import {TagModule} from "primeng/tag";
import {RadioButtonModule} from "primeng/radiobutton";
import {Agent} from "../../../../core/data/affaireSocial-Assurance/affaire-social-assurance.model";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'mrt-dren-allocation-familiale',
  standalone: true,
  imports: [
    CardModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    ReactiveFormsModule,
    NgIf,
    TagModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    RippleModule,
    DatePipe
  ],
  templateUrl: './dren-allocation-familiale.component.html',
  styleUrl: './dren-allocation-familiale.component.scss'
})
export class DrenAllocationFamilialeComponent implements OnInit {

  searchQuery: string = '';
  filteredAgents: any[] = [];
  agents: any[] = [];
  displayAddDialog: boolean = false;
  selectedAgent: any;
  selectedDecision: string | null = null; // Valeur 'approve' ou 'reject'
  displayDialog: boolean = false;
  agentForm!: FormGroup;
  agent: Agent = {};
  genderOptions!: any[];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      nni: ['', Validators.required],
      corpsGrade: ['', Validators.required],
      echellon: ['', Validators.required],
      diplomeProf: ['', Validators.required],
      diplomeAca: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexe: ['', Validators.required],
      dateNaiss: ['', Validators.required],
      lieuNaiss: ['', Validators.required],
      situationMat: ['', Validators.required],
      posteActuel: ['', Validators.required],
      dren: ['', Validators.required],
      nbEnfants: ['', Validators.required],
      conjoints: [''],
      pieces: ['']
    });

    this.genderOptions = [
      {label: 'Homme', value: 'Homme'},
      {label: 'Femme', value: 'Femme'},
      {label: 'Autre', value: 'Autre'}
    ];

    // Fetch or initialize agents
    this.agents = [
      {
        nom: 'DABONNE',
        prenom: 'Hoda',
        nni: 'N123456789',
        corpsGrade: 'Corps A',
        echellon: 'Echellon 1',
        diplomeProf: 'Master en Informatique',
        diplomeAca: 'Licence en Sciences',
        tel: '+226 01 23 45 67',
        email: 'dabonne.hoda@example.com',
        sexe: 'Homme',
        dateNaiss: '1985-04-23',
        lieuNaiss: 'Ouagadougou',
        situationMat: 'Marié',
        posteActuel: 'Ingénieur Système',
        dren: 'DRN1',
        nbEnfants: '2',
        conjoints: 'Mariam DABONNE',
        pieces: 'piece1.pdf'
      },
      {
        nom: 'SERE',
        prenom: 'Abdoulaye',
        nni: 'N987654321',
        corpsGrade: 'Corps B',
        echellon: 'Echellon 2',
        diplomeProf: 'Doctorat en Physique',
        diplomeAca: 'Master en Mathématiques',
        tel: '+226 98 76 54 32',
        email: 'sere.abdoulaye@example.com',
        sexe: 'Homme',
        dateNaiss: '1980-11-15',
        lieuNaiss: 'Bobo-Dioulasso',
        situationMat: 'Célibataire',
        posteActuel: 'Chercheur',
        dren: 'DRN2',
        nbEnfants: '0',
        conjoints: '',
        pieces: 'piece3.pdf'
      },
      {
        nom: 'OUEDRAOGO',
        prenom: 'José Arthur',
        nni: 'N135792468',
        corpsGrade: 'Corps C',
        echellon: 'Echellon 3',
        diplomeProf: 'Ingénieur en Informatique',
        diplomeAca: 'Master en Génie Logiciel',
        tel: '+226 12 34 56 78',
        email: 'ouedraogo.jose@example.com',
        sexe: 'Homme',
        dateNaiss: '1990-08-30',
        lieuNaiss: 'Koudougou',
        situationMat: 'Marié',
        posteActuel: 'Ingénieur Développement',
        dren: 'DRN3',
        nbEnfants: '1',
        conjoints: 'Aissatou OUEDRAOGO',
        pieces: 'piece1.pdf'
      }
    ];

    this.filteredAgents = [...this.agents];
  }

  onSearch() {
    if (this.searchQuery) {
      this.filteredAgents = this.agents.filter(agent =>
        agent.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        agent.prenom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        agent.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredAgents = [...this.agents];
    }
  }

  showAddDialog() {
    this.displayAddDialog = true;
  }

  onHideAddDialog() {
    this.displayAddDialog = false;
  }

  // Fonction pour afficher le dialogue
  showDialog(agent: any) {
    this.selectedAgent = agent;
    this.selectedDecision = null; // Réinitialiser la sélection précédente
    this.displayDialog = true;
  }

  onSave() {
    // Enregistrer l'agent et ses pièces jointes
    const formData = this.agentForm.value;
    formData.pieces = this.agent.pieces; // Assurez-vous de gérer correctement l'envoi des pièces jointes ici
    console.log(formData);
    // Logique pour enregistrer l'agent
  }


  onHideDialog() {
    this.displayDialog = false;
  }

  // Fonction pour obtenir le lien de téléchargement des pièces jointes
  getDownloadLink(filename: string): string {
    return `assets/documents/${filename}`; // Remplacez par le chemin réel des fichiers
  }

  // Fonction pour enregistrer la décision
  onSaveDecision() {
    if (this.selectedDecision) {
      // Logique pour enregistrer la décision
      console.log('Décision enregistrée:', this.selectedDecision);
      this.onHideDialog();
    } else {
      alert('Veuillez sélectionner une décision.');
    }
  }

}
