import {Component, inject, Input, OnInit} from '@angular/core';
import {Avancement} from "../../core/data/fonction/fonction.model";
import {AvancementService} from "../../core/data/fonction/avancement.service";
import {PersonnelResponse} from "../../core/data/personals/personnel.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Cols} from "../../core/data/primeng/primeng.model";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {CalendarModule} from "primeng/calendar";
import {TableModule} from "primeng/table";
import {UpperCasePipe} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'mrt-fonction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    FormValidatorsComponent,
    CalendarModule,
    TableModule,
    UpperCasePipe,
    TooltipModule,
    RippleModule
  ],
  templateUrl: './fonction.component.html',
  styleUrl: './fonction.component.scss'
})
export class FonctionComponent implements OnInit{

  listAvancement$!: Avancement[]; //liste des dossiers
  avancementService = inject(AvancementService);
  @Input() personnel!: PersonnelResponse;
  fonctionAgentForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(ActivatedRoute);
  selectedAvancement!: Avancement;
  // colonne du tableau
  cols: Cols[] = [
    { field: 'fonction', header: 'Fonction' },
    { field: 'dateEffet', header: 'Date Effect' },
    { field: 'corps', header: 'Corps' },
    { field: 'grade', header: 'Grade' },
    { field: 'echelle', header: "Echelle"},
    { field: 'echellon', header: "Echellon"},
    { field: 'indice', header: "Indice"}
  ];
  // Nature de la fonction
  nature = [
    'Integration',
    'Titularisation',
    'Nominative',
    'Avancement',
    'Bonification',
    'Reclassement',
    'Sanction',
    'Decoration',
    'Demission',
    'Retraite',
    'Deces'
  ];


  ngOnInit(): void {
    this.fonctionAgentForm = this.fb.group({
      nature: this.fb.control('',[Validators.required]),
      corps: this.fb.control('',[Validators.required]),
      fonction: this.fb.control('',[Validators.required]),
      grade: this.fb.control('',[Validators.required]),
      echelle: this.fb.control('', [Validators.required]),
      echellon: this.fb.control('', [Validators.required]),
      dateEffet: this.fb.control('',[Validators.required])

    })
    this.getAvancements();
  }


  private getAvancements() {
    this.avancementService.getAllAvancements().subscribe((response) => {
      this.listAvancement$ = response;
    });
  }

  patchForm(selectedAvancement: Avancement) {
    this.fonctionAgentForm.patchValue(selectedAvancement);
  }

  cancel() {
    this.selectedAvancement = {} as Avancement;
    this.fonctionAgentForm.reset();
  }

}
