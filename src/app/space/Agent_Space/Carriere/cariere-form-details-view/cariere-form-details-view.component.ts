import {Component, inject} from '@angular/core';
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {FormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {ConfirmationService, MessageService} from "primeng/api";
import {Personnel} from "../../../../core/data/personals/personnel.model";
import {Cols} from "../../../../core/data/primeng/primeng.model";

@Component({
  selector: 'mrt-cariere-form-details-view',
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
    FileUploadModule
  ],
  templateUrl: './cariere-form-details-view.component.html',
  styleUrl: './cariere-form-details-view.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class CariereFormDetailsViewComponent {


  selectedPersonnel: Personnel = JSON.parse(localStorage.getItem('user') as string);

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
  pieceLibelle!: any[];
  image: any;

  visible: boolean = false;

  colsDossier: Cols[] = [
    {
      field: 'libelle',header: 'Libelle piece'
    }
  ];
  listPieceJustificatif = Array<any>();

  messageService = inject(MessageService);



  onUploadFile(event: any) {
    this.image = event.files[0];
    console.log(this.image);
  }

  removeFile() {
    this.image = null;
  }

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

  ShowDialog() {
    this.visible = true;

  }

  OnHide(){
    this.visible = false;
  }


  removePiece(index: number) {
    this.listPieceJustificatif.splice(index, 1);
  }

  save() {

  }

  cancel() {

  }

  newUpload() {
    this.OnHide()
  }


}
