import {Component, inject, Input, OnInit} from '@angular/core';
import {Mobilite} from "../../core/data/affectation/mobilite.model";
import {Cols} from "../../core/data/primeng/primeng.model";
import {AffectationService} from "../../core/data/affectation/affectation.service";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe} from "@angular/common";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {TooltipModule} from "primeng/tooltip";
import {Personnel} from "../../core/data/personals/personnel.model";

@Component({
  selector: 'mrt-affectation',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    CardModule,
    TableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    DatePipe,
    InputNumberModule,
    CalendarModule,
    TooltipModule
  ],
  templateUrl: './affectation.component.html',
  styleUrl: './affectation.component.scss'
})
export class AffectationComponent implements OnInit{

  showDialog = false;
  listAffections$!: Mobilite[]; //liste des affections
  mobiliteService = inject(AffectationService);
  @Input() personnel!: Personnel;

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
    this.getAllAffections();
  }

  //Methode pour afficher le formulaire d'ajout
  showForm() {
    this.showDialog = true;
  }


  private getAllAffections() {
    this.mobiliteService.getAllMobilites().subscribe((response:Mobilite[]) => {
      this.listAffections$ = response;
    });
  }
}
