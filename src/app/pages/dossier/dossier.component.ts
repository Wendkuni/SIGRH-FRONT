import {Component, inject, Input, OnInit} from '@angular/core';
import {Cols} from "../../core/data/primeng/primeng.model";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DatePipe} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {DossierService} from "../../core/data/dossier/dossier.service";
import {Dossier} from "../../core/data/dossier/dossier.model";
import {Personnel} from "../../core/data/personals/personnel.model";

@Component({
  selector: 'mrt-dossier',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    TableModule,
    DatePipe,
    DialogModule,
    InputTextModule,
    FileUploadModule
  ],
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.scss'
})
export class DossierComponent implements OnInit{

  showDialog = false;
  lisDossiers$!: Dossier[]; //liste des dossiers
  dossierService = inject(DossierService);
  @Input() personnel!: Personnel;
// colonne du tableau
  cols: Cols[] = [
    { field: 'nom', header: 'Nom Dossier' },
    { field: 'date', header: 'Date' },
    { field: 'observation', header: 'Observation' },
    { field: 'images', header: 'Images' }
  ]

  ngOnInit(): void {
    this.getAllDossiers();
  }

  showForm() {
    this.showDialog = true;
  }


  private getAllDossiers() {
    this.dossierService.getAllDossiers().subscribe((response:Dossier[]) => {
      return this.lisDossiers$ = response;
    });
  }
}
