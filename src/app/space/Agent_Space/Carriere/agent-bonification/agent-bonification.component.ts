import {Component, inject} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {Personnel} from "../../../../core/data/personals/personnel.model";
import {PieceJustificatif} from "../../../../core/data/mobilite/mobilite.model";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-bonification',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    MultiSelectModule,
    FormsModule,
    RippleModule,
    TableModule,
    DialogModule,
    FileUploadModule,
    InputTextModule,
    CardModule
  ],
  templateUrl: './agent-bonification.component.html',
  styleUrl: './agent-bonification.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AgentBonificationComponent {

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);


  cancel() {

  }


  save() {

  }

  removePiece(index: any) {
    this.listPieceJustificatif.splice(index, 1);
  }

  pieceLibelle: any;

  listPieceJustificatif = Array<PieceJustificatif>();

  messageService = inject(MessageService);

  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    },

  ];

  ajouter() {
    if (this.pieceLibelle.length > 0 ){
      this.listPieceJustificatif = this.pieceLibelle;
      this.image = null;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: "Choisir des pieces justificatives",
      });
    }

  }

  removeFile() {
    this.image = null;
  }

  image: any;
  visible: boolean = false;

  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
  }

  listeLibellePiece = [
    "1-Certificat medical",
    "2-Casier judiciaire",
    "3-Extrait dacte de naissance",
    "4-Cerificat de nationnalité",
    "5-Carte d'identité",
    "6-Diplome professionnel",
    "7-Fiche Agent",
    "8-Diplome Academique",
    "9-Attestation d'ouverture compte",
    "10-PV d'admission",
  ];

  newUpload() {
    this.OnHide()
  }
  OnHide(){
    this.visible = false;
  }

  ShowDialog() {
    this.visible = true;
  }


}
