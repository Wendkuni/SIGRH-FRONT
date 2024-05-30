import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonnelResponse} from "../../core/data/personals/personnel.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Cols} from "../../core/data/primeng/primeng.model";
import {MobiliteService} from "../../core/data/mobilite/mobilite.service";
import {Mobilite} from "../../core/data/mobilite/mobilite.model";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DatePipe} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FormValidatorsComponent} from "../../shared/form-validators/form-validators.component";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'mrt-affectation',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CardModule,
    TableModule,
    DatePipe,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    FormValidatorsComponent,
    DropdownModule,
    InputNumberModule
  ],
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.scss'
})
export class AffectationComponent implements OnInit{


  showDialog = false;
  listAffections$!: Mobilite[]; //liste des affections
  mobiliteService = inject(MobiliteService);
  formAffection!: FormGroup;
  fb = inject(FormBuilder);
  @Input() personnel!: PersonnelResponse;

  cols: Cols[] = [
    { field: 'matricule', header: 'Matricule' },
    { field: 'nometprenom', header: 'Nom Prenom' },
    {field: 'nature', header: 'Nature'},
    {field: 'dren', header: 'DREN'},
    {field: 'localite', header: 'Localite'},
    {field: 'moughataa', header: 'Moughataa'},
    {field: 'ecole', header: 'Ecole'},
    { field: 'notepedagogique', header: 'Note Pedagogique' },
    {field: 'dateEffet', header: 'Date Effet'}
  ];

  // Nature de l'affectation
  nature = [
    'Convenance Personnelle',
    'Necessite de Service',
    'Nominative',
    'Permutation'
  ];

  ngOnInit(): void {
    this.formAffection = this.fb.group({
      nature: ['', Validators.required],
      dren: ['', Validators.required],
      localite: ['', Validators.required],
      moughataa: ['', Validators.required],
      ecole: ['', Validators.required],
      notepedagogique: ['', Validators.required],
      dateEffet: ['', Validators.required]
    });

    this.getAllAffections();
  }

  //Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showDialog = true;
  }

  private getAllAffections() {
    this.mobiliteService.getAllMobilites().subscribe((response) => {
      this.listAffections$ = response;
    });
  }


}
