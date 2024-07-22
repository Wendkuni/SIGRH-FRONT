import {Component, inject} from '@angular/core';
import {Personnel} from "../../../../core/data/personals/personnel.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {Cols} from "../../../../core/data/primeng/primeng.model";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {CardModule} from "primeng/card";

@Component({
  selector: 'mrt-agent-position-disponibilite',
  standalone: true,
  imports: [
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    RippleModule,
    TableModule,
    DialogModule,
    FileUploadModule,
    CardModule
  ],
  templateUrl: './agent-position-disponibilite.component.html',
  styleUrl: './agent-position-disponibilite.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class AgentPositionDisponibiliteComponent {

  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);
  image: any;
  visible: boolean = false;


  newUpload() {
    this.OnHide()
  }
  OnHide(){
    this.visible = false;
  }

  ShowDialog() {
    this.visible = true;
  }
  cancel() {

  }


  save() {

  }

  removePiece(index: any) {
    this.listPieceJustificatif.splice(index, 1);
  }

  pieceLibelle: any;

  listPieceJustificatif = Array<any>();

  messageService = inject(MessageService);

  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    }
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


}
