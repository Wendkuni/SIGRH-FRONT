import { Component } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-evaluation-fiche',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
    CardModule
  ],
  templateUrl: './agent-evaluation-fiche.component.html',
  styleUrl: './agent-evaluation-fiche.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AgentEvaluationFicheComponent {

  pieceLibelle: any;
  image: any;
  colsDossier: any[] | undefined;
  ancieneteList: any[] | undefined;
  listeDistinction: any[] | undefined;
  nbrEnfantsOptions: any[] | undefined;
  sexeOptions: any[] | undefined;
  listPieceJustificatif = Array<any>();

  listeLibellePiece = [
    "Célibataire",
    "Marié(e)",
    "Divorcé(e)"
  ]


  ChoixAffectation = [
    "Choix 1",
    "Choix 2",
    "Choix 3"
  ]
  removeFile() {

  }

  save() {

  }

  cancel() {

  }

  onUploadFile($event: any) {

  }

  ajouter() {

  }

  removePiece(piece: any) {

  }

}
