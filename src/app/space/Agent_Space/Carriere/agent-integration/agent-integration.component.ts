import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {TabViewModule} from "primeng/tabview";
import {CariereFormDetailsViewComponent} from "../cariere-form-details-view/cariere-form-details-view.component";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-integration',
  standalone: true,
  imports: [
    TabViewModule,
    CariereFormDetailsViewComponent,
    CardModule
  ],
  templateUrl: './agent-integration.component.html',
  styleUrl: './agent-integration.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class AgentIntegrationComponent {

  listWilaya: any[] | undefined;
  affectationForm: FormGroup | any;
  image: any;
  colsDossier: any[] | undefined;
  listPieceJustificatif: any[] | undefined;


  onUploadFile($event: any) {

  }

  ajouter() {

  }

  removePiece(piece: any) {

  }

  save() {

  }

  cancelMobilite() {

  }

}
