import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {Agent} from "../../../../core/data/affaireSocial-Assurance/affaire-social-assurance.model";
import {FormValidatorsComponent} from "../../../../shared/form-validators/form-validators.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'mrt-agent-allocation-sociale',
  standalone: true,
  imports: [
    CardModule,
    FieldsetModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    RippleModule,
    FormValidatorsComponent,
    NgIf
  ],
  templateUrl: './agent-allocation-sociale.component.html',
  styleUrl: './agent-allocation-sociale.component.scss'
})
export class AgentAllocationSocialeComponent implements OnInit {

  agentForm!: FormGroup;
  genderOptions!: any[];
  agent: Agent = {};

  constructor(private fb: FormBuilder) {
  }

  onSave() {
    // Enregistrer l'agent et ses pièces jointes
    const formData = this.agentForm.value;
    formData.pieces = this.agent.pieces; // Assurez-vous de gérer correctement l'envoi des pièces jointes ici
    console.log(formData);
    // Logique pour enregistrer l'agent
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
  }

}
