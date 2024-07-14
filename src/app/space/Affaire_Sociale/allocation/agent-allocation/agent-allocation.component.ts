import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import { Agent } from '../../../../core/data/affaireSocial-Assurance/affaire-social-assurance.model';

@Component({
  selector: 'mrt-agent-allocation',
  standalone: true,
  imports: [
    TabViewModule,
    ButtonModule,
    ConfirmDialogModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    InputTextModule,
    FieldsetModule,
    RippleModule,
    TableModule,
    ToastModule,
    TooltipModule,
    CalendarModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './agent-allocation.component.html',
  styleUrl: './agent-allocation.component.scss',
})
export class AgentAllocationComponent implements OnInit {
  agentForm!: FormGroup;
  genderOptions!: any[];
  agent: Agent = {};

  constructor(private fb: FormBuilder) {}

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
      pieces: [''],
    });

    this.genderOptions = [
      { label: 'Homme', value: 'Homme' },
      { label: 'Femme', value: 'Femme' },
      { label: 'Autre', value: 'Autre' },
    ];
  }

  onSave() {
    // Enregistrer l'agent et ses pièces jointes
    const formData = this.agentForm.value;
    formData.pieces = this.agent.pieces; // Assurez-vous de gérer correctement l'envoi des pièces jointes ici
    console.log(formData);
    // Logique pour enregistrer l'agent
  }

  onFileSelected(event: Event) {
    // Utilisez event.target pour accéder aux détails du fichier sélectionné
    const files = (event.target as HTMLInputElement).files;
    // Vous pouvez maintenant traiter les fichiers sélectionnés, par exemple les télécharger ou les traiter d'une autre manière
  }
}
